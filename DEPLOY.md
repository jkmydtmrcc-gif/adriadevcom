# Hosting Adria Dev na Ubuntu VPS-u i povezivanje domene adriadev.com

Vodič za hostanje statičke React stranice na **Ubuntu** VPS-u i povezivanje domene **adriadev.com**.

---

## 1. Što imate nakon builda

Na svom računalu:

```bash
cd /path/to/adriadev
npm run build
```

U mapi **`dist/`** bit će:
- `index.html`
- `assets/` (CSS i JS)
- `web.config` (možete ignorirati — služi za IIS na Windowsu)

Te datoteke treba prebaciti na Ubuntu poslužitelj i posluživati preko web poslužitelja (nginx preporučen).

---

## 2. Priprema Ubuntu VPS-a

SSH na poslužitelj:

```bash
ssh root@VAŠA_IP_ADRESA
```

Ažuriraj sustav:

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 3. Instalacija nginx-a

```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

Provjera: u browseru otvori `http://VAŠA_IP` — trebala bi se pojaviti default nginx stranica.

---

## 4. Kopiranje stranice na poslužitelj

S lokalnog računala (u mapi gdje je `dist/`):

```bash
scp -r dist/* root@VAŠA_IP:/var/www/adriadev/
```

Ili ako koristiš rsync:

```bash
rsync -avz dist/ root@VAŠA_IP:/var/www/adriadev/
```

Na poslužitelju provjeri:

```bash
ls -la /var/www/adriadev/
# trebaju biti: index.html, assets/, itd.
```

---

## 5. Konfiguracija nginx-a za adriadev.com i SPA

Na poslužitelju napravi config:

```bash
sudo nano /etc/nginx/sites-available/adriadev
```

Zalijepi (zamijeni `adriadev.com` ako koristiš drugu domenu):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name adriadev.com www.adriadev.com;

    root /var/www/adriadev;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

`try_files $uri $uri/ /index.html` osigurava da React Router rute (/usluge, /cijene, itd.) rade i pri direktnom linku i pri osvježivanju.

Aktiviraj site:

```bash
sudo ln -s /etc/nginx/sites-available/adriadev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 6. Povezivanje domene adriadev.com

Kod registrara domene (gdje si kupio adriadev.com):

| Tip  | Host | Vrijednost        |
|------|------|-------------------|
| A    | @    | IP adresa VPS-a   |
| A    | www  | IP adresa VPS-a   |

Pričekaj da DNS odradi (nekoliko minuta do par sati). Provjera:

```bash
nslookup adriadev.com
```

---

## 7. HTTPS (SSL) s Let's Encrypt

Na Ubuntu:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d adriadev.com -d www.adriadev.com
```

Certbot će sam dodati SSL u nginx i postaviti automatsko obnavljanje. Nakon toga stranica radi na **https://adriadev.com**.

---

## 8. Sažetak koraka

| Korak | Naredba / radnja |
|-------|-------------------|
| 1 | Lokalno: `npm run build` |
| 2 | Kopiraj `dist/*` na VPS u `/var/www/adriadev/` |
| 3 | Na VPS: `apt install nginx`, config s `try_files` i `server_name adriadev.com` |
| 4 | `ln -s` site u sites-enabled, `nginx -t`, `systemctl reload nginx` |
| 5 | Kod registrara: A zapis adriadev.com i www → IP VPS-a |
| 6 | `certbot --nginx -d adriadev.com -d www.adriadev.com` |

Gotovo — stranica je na Ubuntu VPS-u na domeni adriadev.com s HTTPS-om.
