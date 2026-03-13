import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, Lock, Eye, Clock, User, Bot } from 'lucide-react'

const CORRECT_PASSWORD = 'AdriaDev2025!'

function getSessions() {
  try {
    return JSON.parse(localStorage.getItem('adria_chat_sessions') || '[]')
  } catch {
    return []
  }
}

export default function ChatLogs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [logs, setLogs] = useState([])
  const [selectedLog, setSelectedLog] = useState(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('adria_admin_auth')
    if (saved === 'true') setIsLoggedIn(true)
  }, [])

  useEffect(() => {
    if (isLoggedIn) setLogs(getSessions())
  }, [isLoggedIn])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsLoggedIn(true)
      sessionStorage.setItem('adria_admin_auth', 'true')
      setError('')
    } else {
      setError('Pogrešna lozinka!')
      setPassword('')
    }
  }

  const refreshLogs = () => setLogs(getSessions())

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString('hr-HR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
              </div>
            </div>
            <h1 className="font-syne font-bold text-xl sm:text-2xl text-center text-text-primary mb-2">
              Chat Logs
            </h1>
            <p className="text-text-secondary text-center text-sm mb-6 sm:mb-8">
              Adria Dev Admin pristup
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Unesite lozinku..."
                className="w-full bg-elevated border border-border rounded-xl px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                autoFocus
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Prijavi se
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <div className="border-b border-border px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <MessageSquare className="w-6 h-6 text-accent shrink-0" />
          <h1 className="font-syne font-bold text-lg sm:text-xl">Chat Logovi</h1>
          <span className="bg-accent/20 text-accent-light text-xs px-2 py-1 rounded-full">
            {logs.length} razgovora
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <button
            onClick={refreshLogs}
            className="text-text-secondary hover:text-text-primary text-sm transition-colors"
          >
            Osvježi
          </button>
          <button
            onClick={() => {
              sessionStorage.removeItem('adria_admin_auth')
              setIsLoggedIn(false)
            }}
            className="text-text-secondary hover:text-red-400 text-sm transition-colors"
          >
            Odjava
          </button>
          <Link to="/" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
            ← Nazad
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-65px)] lg:h-[calc(100vh-57px)]">
        <div className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-border overflow-y-auto flex-shrink-0 max-h-[40vh] lg:max-h-none">
          {logs.length === 0 ? (
            <div className="p-6 text-center text-text-secondary">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Još nema razgovora</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  onClick={() => setSelectedLog(log)}
                  className={`p-4 cursor-pointer hover:bg-surface transition-colors ${
                    selectedLog?.id === log.id
                      ? 'bg-surface border-l-0 lg:border-l-2 border-accent'
                      : ''
                  }`}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-medium line-clamp-2 sm:line-clamp-1 text-text-primary">
                      {log.firstMessage || 'Razgovor bez poruke'}
                    </p>
                    <span className="text-xs text-text-muted whitespace-nowrap shrink-0">
                      {log.messageCount} msg
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{formatDate(log.timestamp)}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          {!selectedLog ? (
            <div className="h-full min-h-[50vh] flex items-center justify-center text-text-muted p-6">
              <div className="text-center">
                <Eye className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>Odaberi razgovor s lijeve strane</p>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto p-4 sm:p-6">
              <div className="bg-surface border border-border rounded-xl p-4 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-text-secondary">Datum: </span>
                    <span className="text-text-primary">{formatDate(selectedLog.timestamp)}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Poruka: </span>
                    <span className="text-text-primary">{selectedLog.messageCount}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {(selectedLog.messages || []).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === 'user' ? 'bg-accent' : 'bg-border'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-accent-light" />
                      )}
                    </div>
                    <div
                      className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                        msg.role === 'user'
                          ? 'bg-accent text-white rounded-tr-sm'
                          : 'bg-elevated text-text-primary rounded-tl-sm'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
