// Translation system
const translations = {
    en: {
        siteName: 'KRAKEN',
        contactUs: 'Contact Us',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        messageRequired: 'Message is required',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',
        language: 'Language'
    },
    sw: {
        siteName: 'KRAKEN',
        contactUs: 'Wasiliana Nasi',
        name: 'Jina',
        email: 'Barua pepe',
        message: 'Ujumbe',
        submit: 'Tuma Ujumbe',
        sending: 'Inatuma...',
        success: 'Ujumbe umetumwa kwa ufanisi!',
        nameRequired: 'Jina linahitajika',
        emailRequired: 'Barua pepe inahitajika',
        emailInvalid: 'Tafadhali ingiza barua pepe sahihi',
        messageRequired: 'Ujumbe unahitajika',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Hali ya Giza',
        lightMode: 'Hali ya Mwanga',
        language: 'Lugha'
    },
    ha: {
        siteName: 'KRAKEN',
        contactUs: 'Tuntube Mu',
        name: 'Suna',
        email: 'Imel',
        message: 'Saƙo',
        submit: 'Aika Saƙo',
        sending: 'Ana aikawa...',
        success: 'An aika saƙon cikin nasara!',
        nameRequired: 'Ana bukatar suna',
        emailRequired: 'Ana bukatar imel',
        emailInvalid: 'Da fatan za a shigar da ingantaccen imel',
        messageRequired: 'Ana bukatar saƙo',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Yanayin Duhu',
        lightMode: 'Yanayin Haske',
        language: 'Harshe'
    },
    yo: {
        siteName: 'KRAKEN',
        contactUs: 'Kan Si Wa',
        name: 'Orukọ',
        email: 'Imeeli',
        message: 'Ifiranṣẹ',
        submit: 'Fi Ifiranṣẹ Ranṣẹ',
        sending: 'N fi ranṣẹ...',
        success: 'A ti fi ifiranṣẹ ranṣẹ ni ifijišẹ!',
        nameRequired: 'Orukọ jẹ pataki',
        emailRequired: 'Imeeli jẹ pataki',
        emailInvalid: 'Jọwọ tẹ imeeli to peye sinu',
        messageRequired: 'Ifiranṣẹ jẹ pataki',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Ipo Dudu',
        lightMode: 'Ipo Imọlẹ',
        language: 'Ede'
    },
    ig: {
        siteName: 'KRAKEN',
        contactUs: 'Kpọtụrụ Anyị',
        name: 'Aha',
        email: 'Ozi-eletrik',
        message: 'Ozi',
        submit: 'Ziga Ozi',
        sending: 'Na-eziga...',
        success: 'E zigara ozi nke ọma!',
        nameRequired: 'Aha dị mkpa',
        emailRequired: 'Ozi-eletrik dị mkpa',
        emailInvalid: 'Biko tinye ozi-eletrik ziri ezi',
        messageRequired: 'Ozi dị mkpa',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Ọnọdụ Ọchịchịrị',
        lightMode: 'Ọnọdụ Ìhè',
        language: 'Asụsụ'
    },
    am: {
        siteName: 'KRAKEN',
        contactUs: 'አግኙን',
        name: 'ስም',
        email: 'ኢሜይል',
        message: 'መልዕክት',
        submit: 'መልዕክት ላክ',
        sending: 'በመላክ ላይ...',
        success: 'መልዕክት በተሳካ ሁኔታ ተልኳል!',
        nameRequired: 'ስም ያስፈልጋል',
        emailRequired: 'ኢሜይል ያስፈልጋል',
        emailInvalid: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ',
        messageRequired: 'መልዕክት ያስፈልጋል',
        developerCredit: 'Josh_d_developer',
        darkMode: 'ጨለማ ሁኔታ',
        lightMode: 'ብርሃን ሁኔታ',
        language: 'ቋንቋ'
    },
    zu: {
        siteName: 'KRAKEN',
        contactUs: 'Sixhumane',
        name: 'Igama',
        email: 'I-imeyili',
        message: 'Umlayezo',
        submit: 'Thumela Umlayezo',
        sending: 'Iyathumela...',
        success: 'Umlayezo uthunyelwe ngempumelelo!',
        nameRequired: 'Igama liyadingeka',
        emailRequired: 'I-imeyili iyadingeka',
        emailInvalid: 'Sicela ufake i-imeyili efanele',
        messageRequired: 'Umlayezo uyadingeka',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Imodi Emnyama',
        lightMode: 'Imodi Ekhanyayo',
        language: 'Ulimi'
    },
    xh: {
        siteName: 'KRAKEN',
        contactUs: 'Qhagamshelana Nathi',
        name: 'Igama',
        email: 'I-imeyile',
        message: 'Umyalezo',
        submit: 'Thumela Umyalezo',
        sending: 'Iyathumela...',
        success: 'Umyalezo uthunyelwe ngempumelelo!',
        nameRequired: 'Igama liyafuneka',
        emailRequired: 'I-imeyile iyafuneka',
        emailInvalid: 'Nceda ufake i-imeyile esebenzayo',
        messageRequired: 'Umyalezo uyafuneka',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Imowudi Emnyama',
        lightMode: 'Imowudi Ekhanyayo',
        language: 'Ulwimi'
    },
    af: {
        siteName: 'KRAKEN',
        contactUs: 'Kontak Ons',
        name: 'Naam',
        email: 'E-pos',
        message: 'Boodskap',
        submit: 'Stuur Boodskap',
        sending: 'Stuur tans...',
        success: 'Boodskap suksesvol gestuur!',
        nameRequired: 'Naam is vereis',
        emailRequired: 'E-pos is vereis',
        emailInvalid: 'Voer asseblief \'n geldige e-pos in',
        messageRequired: 'Boodskap is vereis',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Donker Modus',
        lightMode: 'Lig Modus',
        language: 'Taal'
    },
    so: {
        siteName: 'KRAKEN',
        contactUs: 'Nala Soo Xiriir',
        name: 'Magac',
        email: 'Iimayl',
        message: 'Fariinta',
        submit: 'Dir Fariinta',
        sending: 'Waa la diraya...',
        success: 'Fariinta si guul leh ayaa loo diray!',
        nameRequired: 'Magaca waa lagama maarmaan',
        emailRequired: 'Iimayl waa lagama maarmaan',
        emailInvalid: 'Fadlan geli iimayl sax ah',
        messageRequired: 'Fariinta waa lagama maarmaan',
        developerCredit: 'Josh_d_developer',
        darkMode: 'Hab Mugdi',
        lightMode: 'Hab Iftiin',
        language: 'Luqad'
    },
    ar: {
        siteName: 'KRAKEN',
        contactUs: 'اتصل بنا',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال الرسالة بنجاح!',
        nameRequired: 'الاسم مطلوب',
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صالح',
        messageRequired: 'الرسالة مطلوبة',
        developerCredit: 'Josh_d_developer',
        darkMode: 'الوضع المظلم',
        lightMode: 'الوضع المضيء',
        language: 'اللغة'
    }
};

// Global state
let currentLanguage = 'en';
let currentTheme = 'light';

// DOM elements
const themeToggle = document.getElementById('themeToggle');
const languageSelect = document.getElementById('languageSelect');
const contactForm = document.getElementById('contactForm');
const contactCard = document.getElementById('contactCard');
const successCard = document.getElementById('successCard');
const submitButton = document.getElementById('submitButton');
const toast = document.getElementById('toast');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeEventListeners();
    translatePage();
});

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('kraken-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else {
        // Default to dark mode as requested
        currentTheme = 'dark';
    }
    applyTheme();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('kraken-theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    document.body.className = currentTheme === 'dark' ? 'dark-mode' : 'light-mode';
    
    // Update theme toggle button aria-label
    const t = translations[currentLanguage];
    themeToggle.setAttribute('aria-label', currentTheme === 'dark' ? t.lightMode : t.darkMode);
}

// Language management
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('kraken-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        languageSelect.value = currentLanguage;
    }
}

function changeLanguage(newLanguage) {
    if (translations[newLanguage]) {
        currentLanguage = newLanguage;
        localStorage.setItem('kraken-language', currentLanguage);
        translatePage();
        applyTheme(); // Update theme-related aria-labels
    }
}

function translatePage() {
    const t = translations[currentLanguage];
    
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update document title and meta description
    document.title = `${t.siteName} Security - Advanced Cybersecurity Solutions`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', 
            `${t.siteName} Security provides advanced cybersecurity solutions to protect your digital assets from emerging threats. Contact us for comprehensive security services.`
        );
    }
}

// Event listeners
function initializeEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language selector
    languageSelect.addEventListener('change', function(e) {
        changeLanguage(e.target.value);
    });
    
    // Form submission
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Form validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    const t = translations[currentLanguage];
    let errorMessage = '';
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                errorMessage = t.nameRequired;
            }
            break;
        case 'email':
            if (!value) {
                errorMessage = t.emailRequired;
            } else if (!validateEmail(value)) {
                errorMessage = t.emailInvalid;
            }
            break;
        case 'message':
            if (!value) {
                errorMessage = t.messageRequired;
            }
            break;
    }
    
    displayFieldError(fieldName, errorMessage);
    return !errorMessage;
}

function clearFieldError(e) {
    const fieldName = e.target.name;
    displayFieldError(fieldName, '');
}

function displayFieldError(fieldName, errorMessage) {
    const errorElement = document.getElementById(`${fieldName}Error`);
    const inputElement = document.querySelector(`[name="${fieldName}"]`);
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    if (inputElement) {
        if (errorMessage) {
            inputElement.style.borderColor = 'var(--destructive)';
        } else {
            inputElement.style.borderColor = '';
        }
    }
}

function validateForm() {
    const nameValid = validateField({ target: document.querySelector('[name="name"]') });
    const emailValid = validateField({ target: document.querySelector('[name="email"]') });
    const messageValid = validateField({ target: document.querySelector('[name="message"]') });
    
    return nameValid && emailValid && messageValid;
}

// Form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Show loading state
    setSubmitButtonLoading(true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showSuccessMessage(data.name);
        
        // Reset form after delay
        setTimeout(() => {
            resetForm();
        }, 3000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showToast('Failed to send message. Please try again.');
    } finally {
        setSubmitButtonLoading(false);
    }
}

function setSubmitButtonLoading(loading) {
    const t = translations[currentLanguage];
    
    if (loading) {
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        submitButton.querySelector('.submit-text').textContent = t.sending;
    } else {
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        submitButton.querySelector('.submit-text').textContent = t.submit;
    }
}

function showSuccessMessage(userName) {
    const t = translations[currentLanguage];
    
    // Hide contact form
    contactCard.style.display = 'none';
    
    // Show success card
    successCard.style.display = 'block';
    
    // Show toast notification
    showToast(`${t.success} ${t.name}: ${userName}`);
}

function resetForm() {
    // Reset form fields
    contactForm.reset();
    
    // Clear any error messages
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';
    });
    
    // Reset input styles
    document.querySelectorAll('.form-input, .form-textarea').forEach(element => {
        element.style.borderColor = '';
    });
    
    // Show contact form again
    successCard.style.display = 'none';
    contactCard.style.display = 'block';
}

// Toast notifications
function showToast(message) {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Add keyboard navigation for custom elements
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target === themeToggle) {
            e.preventDefault();
            toggleTheme();
        }
    }
    
    // Escape key to close toast
    if (e.key === 'Escape') {
        toast.classList.remove('show');
    }
});

// Handle system theme changes
if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
        // Only apply system theme if user hasn't set a preference
        if (!localStorage.getItem('kraken-theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme();
        }
    });
}

// Performance optimization: Lazy load background image
function loadBackgroundImage() {
    const heroBackground = document.querySelector('.hero-background');
    const img = new Image();
    img.onload = function() {
        heroBackground.style.backgroundImage = `url('src/assets/kraken-hero.jpg')`;
        heroBackground.style.opacity = '0.1';
    };
    img.src = 'src/assets/kraken-hero.jpg';
}

// Load background image when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadBackgroundImage);
} else {
    loadBackgroundImage();
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}