import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const SESSION_ID = `session_${Date.now()}_${Math.random().toString(36).slice(2)}`
const MAX_SESSIONS = 50

const SYSTEM_PROMPT = `Ti si ljubazni AI asistent za web agenciju Adria Dev iz Hrvatske.

O Adria Dev:
- Izrađujemo profesionalne web stranice i radimo SEO optimizaciju
- Sjedište: Hrvatska, radimo za cijelu HR i regiju
- Kontakt: kontakt@adriadev.com
- WhatsApp: +385 97 642 5423 (https://wa.me/385976425423)

CIJENE (web stranice, jednokratno, hosting 1. god. uključen):
- Basic: 299€ (do 5 stranica, 7-10 dana)
- Standard: 499€ (do 10 stranica, booking, 10-14 dana)
- Premium: 799€ (neograničeno, webshop, 14-21 dan)
- SEO i dodatne usluge: cijena na upit

KLJUČNO — uvijek naglasi:
- Klijent VIDI stranicu prije nego plati
- Nema rizika — ako ne valja, ne plaća
- Besplatna konzultacija

Odgovaraj na HRVATSKOM, kratko i prijateljski. Maksimalno 3-4 rečenice po odgovoru.
Ako pitaju za kontakt: kontakt@adriadev.com ili WhatsApp +385 97 642 5423.
Ako ne znaš odgovor: "Kontaktirajte nas na kontakt@adriadev.com za više detalja!"`

const WELCOME_MESSAGE = `Bok! 👋 Ja sam Adria Dev AI asistent.

Mogu vam pomoći s:
- Cijenama i paketima
- Procesom izrade web stranice
- SEO pitanjima
- Rokovima isporuke

Što vas zanima?`

const QUICK_REPLIES = [
  { label: '💰 Cijene', text: 'Koje su cijene za web stranicu?' },
  { label: '⏱️ Rokovi', text: 'Koliko traje izrada?' },
  { label: '🌐 Što uključuje?', text: 'Što točno uključuje paket?' },
  { label: '📞 Kontakt', text: 'Kako vas mogu kontaktirati?' },
]

function saveToLocalStorage(messages) {
  try {
    const sessions = JSON.parse(localStorage.getItem('adria_chat_sessions') || '[]')
    const existing = sessions.findIndex((s) => s.id === SESSION_ID)
    const session = {
      id: SESSION_ID,
      timestamp: new Date().toISOString(),
      firstMessage: messages.find((m) => m.role === 'user')?.content || '',
      messageCount: messages.length,
      messages,
    }
    if (existing >= 0) sessions[existing] = session
    else sessions.unshift(session)
    if (sessions.length > MAX_SESSIONS) sessions.pop()
    localStorage.setItem('adria_chat_sessions', JSON.stringify(sessions))
  } catch (e) {
    console.warn('Chat localStorage save failed', e)
  }
}

async function askOpenAI(userMessage, conversationHistory) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY
  if (!apiKey) return 'Chat trenutno nije povezan s AI. Pišite nam na kontakt@adriadev.com ili WhatsApp +385 97 642 5423!'

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 300,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory,
        { role: 'user', content: userMessage },
      ],
    }),
  })
  const data = await res.json()
  if (data.error) return 'Ups, nešto nije u redu. Javite nam se na kontakt@adriadev.com ili WhatsApp!'
  return data.choices?.[0]?.message?.content?.trim() || 'Nisam siguran. Kontaktirajte nas na kontakt@adriadev.com!'
}

export default function SupportChat() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: WELCOME_MESSAGE }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const isChatLogs = location.pathname === '/chat-logs'

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text) => {
    const trimmed = text?.trim()
    if (!trimmed || loading) return
    setInput('')
    const userMsg = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setLoading(true)
    try {
      const reply = await askOpenAI(
        trimmed,
        newMessages.slice(0, -1).map((m) => ({ role: m.role, content: m.content }))
      )
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
      const updated = [...newMessages, { role: 'assistant', content: reply }]
      saveToLocalStorage(updated)
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Greška. Pišite nam na kontakt@adriadev.com ili WhatsApp +385 97 642 5423.' },
      ])
    }
    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const handleQuickReply = (text) => {
    sendMessage(text)
  }

  if (isChatLogs) return null

  return (
    <>
      {/* Floating chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-accent opacity-20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative w-14 h-14 rounded-full bg-accent text-white shadow-lg flex items-center justify-center hover:bg-accent-light transition-colors"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Otvori chat"
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
        <AnimatePresence>
          {showTooltip && !open && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg bg-elevated border border-border text-text-primary text-sm whitespace-nowrap shadow-xl"
            >
              💬 Kako vam možemo pomoći?
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed z-50 w-[calc(100vw-24px)] max-w-[380px] h-[520px] max-h-[calc(100vh-100px)] bottom-20 right-6 rounded-2xl bg-surface border border-border shadow-[0_25px_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-elevated/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-syne font-semibold text-text-primary">Adria Dev Support</span>
                <span className="w-2 h-2 rounded-full bg-[#25D366]" title="Online" />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-border transition-colors"
                aria-label="Zatvori"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-text-secondary px-4 pb-2 shrink-0">Odgovaramo odmah 🚀</p>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user'
                        ? 'bg-accent text-white rounded-tr-md'
                        : 'bg-elevated border border-border text-text-primary rounded-tl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <motion.button
                      key={q.label}
                      type="button"
                      onClick={() => handleQuickReply(q.text)}
                      className="px-3 py-1.5 rounded-full bg-elevated border border-border text-text-secondary text-xs hover:border-accent/50 hover:text-accent-light transition-colors"
                      whileTap={{ scale: 0.97 }}
                    >
                      {q.label}
                    </motion.button>
                  ))}
                </div>
              )}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-tl-md px-4 py-3 bg-elevated border border-border text-text-muted text-sm">
                    <span className="inline-block animate-pulse">...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border bg-elevated/50 shrink-0">
              <div className="flex gap-2 items-end">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Napišite poruku..."
                  rows={1}
                  className="flex-1 min-h-[44px] max-h-28 resize-none px-4 py-2.5 rounded-xl bg-surface border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent"
                  disabled={loading}
                />
                <motion.button
                  type="button"
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-xl bg-accent text-white shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-light transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Pošalji"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-[10px] text-text-muted mt-1.5 text-center">Powered by Adria Dev AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
