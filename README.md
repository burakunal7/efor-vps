# Efor Bilişim - IT Destek ve Donanım Hizmetleri

Profesyonel IT destek ve donanım hizmetleri sunan Efor Bilişim'in kurumsal web sitesi.

## 🚀 Özellikler

- **Modern Tasarım**: Neon renk teması ile modern ve etkileyici görünüm
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **İletişim Formu**: Müşteri teklif talepleri için gelişmiş form
- **Admin Paneli**: Teklif yönetimi için kullanıcı dostu panel
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Hızlı Yükleme**: Optimize edilmiş performans

## 🛠️ Teknolojiler

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **İkonlar**: Bootstrap Icons
- **Veri Saklama**: JSON dosyaları

## 📋 Hizmetler

1. **Bilgisayar Tamiri** - Donanım ve yazılım sorunları
2. **Kamera Kurulumu** - Güvenlik sistemleri
3. **Ağ Kurulumu** - WiFi ve ağ altyapısı
4. **Teknik Danışmanlık** - IT çözümleri
5. **Donanım Satışı** - Bilgisayar parçaları
6. **Veri Kurtarma** - Veri kurtarma hizmetleri
7. **Uydu ve TV Sistemleri** - Uydu anten ve TV kurulumu

## 🚀 Kurulum

### Gereksinimler
- Python 3.8+
- pip

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone [repository-url]
cd efor-bilisim
```

2. **Sanal ortam oluşturun**
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

3. **Bağımlılıkları yükleyin**
```bash
pip install -r requirements.txt
```

4. **Çevre değişkenlerini ayarlayın**
```bash
cp .env.example .env
# .env dosyasını düzenleyin
```

5. **Uygulamayı çalıştırın**
```bash
python app.py
```

## ⚙️ Yapılandırma

### .env Dosyası
```env
SECRET_KEY=your_secret_key_here
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@eforbilisim.com
```

### Admin Girişi
- **Kullanıcı Adı**: admin
- **Şifre**: efor2024

## 📁 Proje Yapısı

```
efor-bilisim/
├── app.py                 # Ana Flask uygulaması
├── requirements.txt       # Python bağımlılıkları
├── README.md             # Proje dokümantasyonu
├── .env                  # Çevre değişkenleri
├── quotes.json           # Teklif verileri
├── static/               # Statik dosyalar
│   ├── css/
│   │   └── style.css     # Ana CSS dosyası
│   ├── js/
│   │   └── script.js     # JavaScript dosyası
│   └── images/           # Resim dosyaları
└── templates/            # HTML şablonları
    ├── base.html         # Ana şablon
    ├── home.html         # Ana sayfa
    ├── about.html        # Hakkımızda
    ├── services.html     # Hizmetler
    ├── contact.html      # İletişim
    ├── 404.html          # Hata sayfası
    └── admin/            # Admin paneli
        ├── login.html    # Admin giriş
        └── quotes.html   # Teklif yönetimi
```

## 🌐 Canlıya Alma

### PythonAnywhere
1. PythonAnywhere hesabı oluşturun
2. Files sekmesinde projeyi yükleyin
3. Web sekmesinde yeni web app oluşturun
4. WSGI dosyasını düzenleyin
5. Virtual environment oluşturun ve requirements.txt yükleyin

### Heroku
1. Heroku hesabı oluşturun
2. Heroku CLI yükleyin
3. Projeyi deploy edin:
```bash
heroku create efor-bilisim
git push heroku main
```

### Vercel
1. Vercel hesabı oluşturun
2. GitHub repository'yi bağlayın
3. Build ayarlarını yapılandırın
4. Deploy edin

## 🔧 Geliştirme

### Yeni Hizmet Ekleme
1. `app.py` dosyasındaki `services` listesine ekleyin
2. İletişim formundaki seçeneklere ekleyin
3. Admin panelindeki filtreye ekleyin

### Tasarım Değişiklikleri
- CSS değişiklikleri: `static/css/style.css`
- JavaScript: `static/js/script.js`
- HTML şablonları: `templates/` klasörü

## 📞 İletişim

- **Telefon**: +90 537 958 20 51
- **E-posta**: info@eforbilisim.com
- **Adres**: Söğütlü Çeşme Mahallesi, 2.Barbaros Sk. No:2, 34579 Küçükçekmece/İstanbul

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