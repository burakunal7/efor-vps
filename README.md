# Efor Bilişim Web Sitesi

İstanbul'da profesyonel bilgisayar tamiri, uydu kurulumu ve IT destek hizmetleri sunan Efor Bilişim'in resmi web sitesi.

## 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **İletişim Formu**: Müşteri talepleri için gelişmiş form
- **Admin Paneli**: Teklif yönetimi için yönetici paneli
- **SSL Sertifikası**: Güvenli HTTPS bağlantısı
- **Hızlı Yükleme**: Optimize edilmiş performans

## 🛠️ Teknolojiler

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Veritabanı**: JSON dosya tabanlı
- **Sunucu**: Nginx + Gunicorn
- **SSL**: Let's Encrypt
- **CDN**: Cloudflare

## 📁 Proje Yapısı

```
efor-bilisim/
├── app.py                 # Ana Flask uygulaması
├── requirements.txt       # Python bağımlılıkları
├── .env                  # Ortam değişkenleri
├── robots.txt            # Arama motoru yönergeleri
├── sitemap.xml           # Site haritası
├── static/               # Statik dosyalar
│   ├── css/             # Stil dosyaları
│   ├── js/              # JavaScript dosyaları
│   └── images/          # Görseller
├── templates/            # HTML şablonları
│   ├── admin/           # Admin panel şablonları
│   └── *.html           # Ana sayfa şablonları
└── quotes.json          # Teklif verileri
```

## 🚀 Kurulum

1. **Repository'yi klonlayın:**
   ```bash
   git clone https://github.com/username/efor-bilisim.git
   cd efor-bilisim
   ```

2. **Python sanal ortamı oluşturun:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   # veya
   venv\Scripts\activate     # Windows
   ```

3. **Bağımlılıkları yükleyin:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Ortam değişkenlerini ayarlayın:**
   ```bash
   cp .env.example .env
   # .env dosyasını düzenleyin
   ```

5. **Uygulamayı çalıştırın:**
   ```bash
   python app.py
   ```

## 🔧 Yapılandırma

### Ortam Değişkenleri (.env)
```env
SECRET_KEY=your-secret-key
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@eforbilisim.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-admin-password
```

## 📧 E-posta Yapılandırması

Gmail SMTP kullanımı için:
1. Gmail hesabınızda 2FA'yı etkinleştirin
2. Uygulama şifresi oluşturun
3. SMTP_PASSWORD olarak uygulama şifresini kullanın

## 🌐 Deployment

### Nginx Yapılandırması
```nginx
server {
    listen 80;
    server_name eforbilisim.com www.eforbilisim.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name eforbilisim.com www.eforbilisim.com;
    
    ssl_certificate /etc/letsencrypt/live/eforbilisim.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/eforbilisim.com/privkey.pem;
    
    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Gunicorn Yapılandırması
```bash
gunicorn --bind 127.0.0.1:8000 --workers 3 app:app
```

## 🔒 Güvenlik

- **HTTPS**: SSL sertifikası ile güvenli bağlantı
- **CSRF Koruması**: Form güvenliği
- **Input Validation**: Giriş doğrulama
- **Admin Authentication**: Güvenli admin girişi

## 📊 SEO Özellikleri

- **Meta Tags**: Open Graph, Twitter Cards
- **Structured Data**: Schema.org markup
- **Sitemap**: XML site haritası
- **Robots.txt**: Arama motoru yönergeleri
- **Canonical URLs**: Duplicate content koruması

## 🎨 Tasarım Özellikleri

- **Modern UI**: Bootstrap 5 ile modern tasarım
- **Responsive**: Mobil uyumlu
- **Dark Theme**: Koyu tema
- **Animations**: Smooth geçişler
- **Loading States**: Yükleme animasyonları

## 📱 Mobil Uyumluluk

- **Responsive Grid**: Bootstrap grid sistemi
- **Touch Friendly**: Dokunmatik cihaz uyumlu
- **Fast Loading**: Optimize edilmiş görseller
- **Mobile Menu**: Hamburger menü

## 🔧 Bakım

### Log Dosyaları
```bash
# Nginx logları
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Flask logları
sudo journalctl -u efor-bilisim -f
```

### SSL Sertifikası Yenileme
```bash
sudo certbot renew --dry-run
```

## 📞 İletişim

- **Website**: https://eforbilisim.com
- **E-posta**: info@eforbilisim.com
- **Telefon**: +90 536 878 51 57
- **Adres**: Söğütlü Çeşme Mahallesi, 2.Barbaros Sk. No:44, 34579 Küçükçekmece/İstanbul

## 📄 Lisans

Bu proje Efor Bilişim'e aittir. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

---

**Efor Bilişim** - Profesyonel IT Destek ve Donanım Hizmetleri
