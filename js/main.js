const app = {
    
    properties: [
        { id: 1, title: "David Ave", city: "All", suburb: "Hillpark", price: 900, beds: 3, baths: 2, carparks: 2, status: "Rented", img: "media/rentals/rent-David ave Hillpark-1.avif", gallery: ["media/rentals/rent-David ave Hillpark-1.avif", "media/rentals/rent-David ave Hillpark-2.avif", "media/rentals/rent-David ave Hillpark-3.avif"] },
        { id: 2, title: "Karoro Rd", city: "All", suburb: "Flat Bush", price: 715, beds: 3, baths: 2, carparks: 1, status: "Rented", img: "media/rentals/rent-Karoro Rd , Flat Bush-1.avif", gallery: ["media/rentals/rent-Karoro Rd , Flat Bush-1.avif", "media/rentals/rent-Karoro Rd , Flat Bush-2.avif", "media/rentals/rent-Karoro Rd , Flat Bush-3.avif", "media/rentals/rent-Karoro Rd , Flat Bush-4.avif", "media/rentals/rent-Karoro Rd , Flat Bush-5.avif", "media/rentals/rent-Karoro Rd , Flat Bush-6.avif", "media/rentals/rent-Karoro Rd , Flat Bush-7.avif"] },
        { id: 3, title: "Dignity Street", city: "All", suburb: "Papakura", price: 640, beds: 2, baths: 1, carparks: 1, status: "Rented", img: "media/rentals/rent-Dignity Street, Papakura-1.avif", gallery: ["media/rentals/rent-Dignity Street, Papakura-1.avif"] }
    ],

    state: { rentalCaroIndex: 1, cityFilter: 'All' },
    carousels: {},

    init: function() {
        // Theme Initialization
        const theme = localStorage.getItem('rw_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        
        // Component Initializations
        this.initHeroVideoEmergence();
        this.initRentalCarousel();
        this.initMarquees();
        this.initCounters();
        this.renderProperties();
        
        // Filter Listeners
        const rentSlider = document.getElementById('filter-rent');
        if(rentSlider) {
            rentSlider.addEventListener('input', (e) => {
                document.getElementById('rent-val').textContent = e.target.value;
                this.renderProperties();
            });
        }
        document.getElementById('filter-beds')?.addEventListener('change', () => this.renderProperties());

        // SPA Navigation Initialization
        const hash = window.location.hash.substring(1);
        this.navigate(hash || 'home');
    },

    toggleFaq: function(el) {
        const item = el.parentElement;
        const container = item.parentElement;
        const wasOpen = item.classList.contains('open');
        
        // Auto-close other open FAQs
        container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        
        if (!wasOpen) {
            item.classList.add('open');
        }
    },

    initCounters: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;
                            const speed = target > 100 ? 50 : 20; 
                            const inc = target / speed;
                            if(count < target) {
                                counter.innerText = Math.ceil(count + inc);
                                setTimeout(updateCount, 30);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const trustBanner = document.querySelector('.trust-banner');
        if(trustBanner) observer.observe(trustBanner);
    },

    navigate: function(viewId, event) {
        if(event) event.preventDefault();
        
        // Update active navigation link
        document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active-link'));
        const navLink = document.getElementById('nav-' + viewId);
        if(navLink) navLink.classList.add('active-link');
        
        // Toggle active section
        document.querySelectorAll('.page-view').forEach(view => {
            view.classList.toggle('active', view.id === 'view-' + viewId);
        });
        
        document.getElementById('nav-links').classList.remove('mobile-active');
        window.location.hash = viewId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    toggleTheme: function() {
        const root = document.documentElement;
        const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('rw_theme', newTheme);
        
        const flL = document.querySelector('.footer-col .footer-logo-light');
        const flD = document.querySelector('.footer-col .footer-logo-dark');
        if(flL && flD) {
            flL.style.display = newTheme === 'dark' ? 'none' : 'block';
            flD.style.display = newTheme === 'dark' ? 'block' : 'none';
        }
    },

    toggleMobileNav: function() {
        document.getElementById('nav-links').classList.toggle('mobile-active');
    },

    initHeroVideoEmergence: function() {
        const logo = document.getElementById('home-dyn-logo');
        const tag = document.getElementById('home-dyn-tag');
        
        if(logo) logo.classList.remove('visible');
        if(tag) tag.classList.remove('visible');

        setTimeout(() => { if(logo) logo.classList.add('visible'); }, 10000);
        setTimeout(() => { if(tag) tag.classList.add('visible'); }, 15000);
    },

    initRentalCarousel: function() {
        const wrapper = document.getElementById('rental-carousel-wrapper');
        if(!wrapper) return;
        
        let slidesHtml = '';
        for(let i=1; i<=14; i++) {
            slidesHtml += `<div class="rental-caro-slide ${i===1?'active':''}" id="rcs-${i}" style="background-image:url('media/rentals/rental-caro-${i}.avif'); background-size: cover; background-position: center; width: 100%; height: 100%; position: absolute; inset: 0; opacity: ${i===1?1:0}; transition: opacity 1.5s ease;"></div>`;
        }
        wrapper.innerHTML = slidesHtml;

        setInterval(() => {
            const current = document.getElementById(`rcs-${this.state.rentalCaroIndex}`);
            if(current) current.style.opacity = 0;
            
            this.state.rentalCaroIndex++;
            if(this.state.rentalCaroIndex > 14) this.state.rentalCaroIndex = 1;
            
            const next = document.getElementById(`rcs-${this.state.rentalCaroIndex}`);
            if(next) next.style.opacity = 1;
        }, 6000);
    },

    initMarquees: function() {
        const content = `
            <div class="testimonial-card"><p class="testimonial-text">"Thank you, Rajiv(Rent Worx) for finding us such lovely tenants. We also really appreciated the way you looked after the small teething issues and sorted them out quickly and gracefully. It made the whole process easy and stress-free."</p><p class="testimonial-author">- MK (Landlord)</p></div>
            <div class="testimonial-card"><p class="testimonial-text">"Rent Worx - Rajiv has immense knowledge of the real estate industry. He made the whole process smooth and straightforward, and we were very happy with the outcome. His advice and guidance were greatly appreciated. Highly recommended for his professional and reliable service."</p><p class="testimonial-author">- D Brannigan (Landlord)</p></div>
            <div class="testimonial-card"><p class="testimonial-text">"Rajiv helped us rent our house in Papakura in a very short time. He guided us through the whole process and also gave us helpful advice about Healthy Homes requirements. We really appreciated his help and straightforward advice."</p><p class="testimonial-author">- Mr Sharma (Landlord)</p></div>
            <div class="testimonial-card"><p class="testimonial-text">"Really happy with the service from Rent Worx. They are responsive, thorough, and always professional. Nothing is ever too much trouble, and they make managing the property good."</p><p class="testimonial-author">- Na Hui (Landlord)</p></div>
        `;
        const hm = document.getElementById('home-marquee');
        if(hm) hm.innerHTML = content + content;
    },

    setCityFilter: function(city, btn) {
        this.state.cityFilter = city;
        document.querySelectorAll('#location-chips .chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        this.renderProperties();
    },

    startPropertyCarousels: function(filtered) {
        Object.values(this.carousels).forEach(clearInterval);
        this.carousels = {};

        filtered.forEach(p => {
            if(p.gallery && p.gallery.length > 1) {
                let idx = 0;
                const images = p.gallery;
                this.carousels[p.id] = setInterval(() => {
                    idx = (idx + 1) % images.length;
                    const imgEl = document.getElementById(`prop-img-${p.id}`);
                    if(imgEl) {
                        imgEl.style.opacity = 0;
                        setTimeout(() => {
                            imgEl.src = images[idx];
                            imgEl.style.opacity = 1;
                        }, 300);
                    }
                }, 3000 + Math.random() * 1000);
            }
        });
    },

    renderProperties: function() {
        const grid = document.getElementById('property-grid');
        if(!grid) return;

        const beds = parseInt(document.getElementById('filter-beds')?.value || '0');
        const rent = parseInt(document.getElementById('filter-rent')?.value || '1500');

        const filtered = this.properties.filter(p => {
            const matchCity = this.state.cityFilter === 'All' || p.city === this.state.cityFilter;
            const matchBeds = p.beds >= beds;
            const matchRent = p.price <= rent;
            return matchCity && matchBeds && matchRent;
        });

        const countEl = document.getElementById('results-count');
        if(countEl) countEl.textContent = `Showing ${filtered.length} of ${this.properties.length} Properties`;

        if(filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">No rental properties match this exact filter criteria. Contact us for upcoming unlisted homes.</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => {
            const badgeHtml = p.status === 'Rented' 
                ? `<div class="prop-status-rented">Rented</div>`
                : `<div class="prop-date">Available: ${p.date}</div>`;
            
            return `
            <div class="deep-card">
                <div class="fade-img-wrapper" style="height: 230px;" id="prop-wrapper-${p.id}">
                    ${badgeHtml}
                    <img src="${p.img}" id="prop-img-${p.id}" alt="${p.title}" style="transition: opacity 0.3s ease;">
                </div>
                <div class="property-content">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 0.5rem;">
                        <div class="prop-price">$${p.price} <span style="font-size:0.85rem; color:var(--text-secondary); font-weight: 500;">/wk</span></div>
                    </div>
                    <h3 class="prop-title">${p.title}</h3>
                    <p class="prop-address">${p.suburb}, Auckland</p>
                    <div class="prop-features">
                        <span>🛏️ ${p.beds}</span>
                        <span>🛁 ${p.baths}</span>
                        <span>🚗 ${p.carparks}</span>
                    </div>
                    <div class="prop-tags" style="margin-top: 0.5rem;">
                        <span class="prop-tag" style="color:var(--success); border-color:var(--success); font-size:0.8rem; font-weight:600; padding:2px 8px; border:1px solid; border-radius:4px;">Healthy Homes</span>
                    </div>
                    <button class="btn-outline" onclick="app.openPropertyModal(${p.id})" style="margin-top:auto;">Book Viewing / Details</button>
                </div>
            </div>
        `}).join('');

        this.startPropertyCarousels(filtered);
    },

    clearFilters: function() {
        const fb = document.getElementById('filter-beds'); if(fb) fb.value = '0';
        const fr = document.getElementById('filter-rent'); if(fr) fr.value = 1500;
        const rv = document.getElementById('rent-val'); if(rv) rv.textContent = '1500';
        this.state.cityFilter = 'All';
        document.querySelectorAll('#location-chips .chip').forEach((c, idx) => c.classList.toggle('active', idx === 0));
        this.renderProperties();
    },

    enlargeImage: function(src) {
        const lb = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        img.src = src;
        lb.classList.add('active');
    },

    openPropertyModal: function(id) {
        const prop = this.properties.find(p => p.id === id);
        if(!prop) return;

        document.getElementById('modal-prop-title').textContent = prop.title;
        
        let galleryHtml = '';
        if(prop.gallery && prop.gallery.length > 0) {
            galleryHtml = `<div class="gallery-grid">
                ${prop.gallery.map(img => `<img src="${img}" alt="Property Gallery Image" onclick="app.enlargeImage(this.src)">`).join('')}
            </div>`;
        }
        
        const dateOrStatus = prop.status === 'Rented' 
                ? `<p style="color: #fff; background: var(--accent-gold); font-weight:700; margin:0; padding: 6px 12px; border-radius: 4px; display: inline-block; font-size: 0.85rem; letter-spacing: 1px;">Rented</p>`
                : `<p style="color: var(--success); font-weight:600; margin:0;">Available: ${prop.date}</p>`;

        document.getElementById('modal-prop-body').innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 1rem;">
                <h2 style="color: var(--accent-gold); font-size: 2.5rem; margin:0;">$${prop.price} <span style="font-size:1rem; color:var(--text-secondary);">/ week</span></h2>
                <div style="text-align:right;">
                    <p style="font-weight:600; font-size:1.1rem; margin:0; padding-bottom: 0.2rem;">${prop.suburb}, Auckland</p>
                    ${dateOrStatus}
                </div>
            </div>
            <div style="display:flex; gap:2rem; font-size: 1.2rem; margin-bottom: 2rem;">
                <span>🛏️ ${prop.beds} Bedrooms</span>
                <span>🛁 ${prop.baths} Bathrooms</span>
                <span>🚗 ${prop.carparks} Parking spaces</span>
            </div>
            <img src="${prop.img}" style="width:100%; max-height:400px; object-fit:cover; border-radius:8px; margin-bottom: 2rem; cursor: pointer;" alt="Main Property Image" onclick="app.enlargeImage(this.src)">
            <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Beautifully maintained and fully compliant with Healthy Homes Standards. This exceptional rental in ${prop.suburb} offers unparalleled comfort and convenience. Managed professionally by Rent Worx.
            </p>
            ${galleryHtml}
            <div style="margin-top: 3rem; text-align: center;">
                <button class="btn-primary" onclick="app.navigate('contact'); app.closeAllModals();">Contact Agent / Book Viewing</button>
            </div>
        `;

        document.getElementById('modal-property').classList.add('active');
    },

    closeModal: function(id) { document.getElementById(id).classList.remove('active'); },
    closeAllModals: function() { document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active')); },
    closeOnBackdrop: function(e, id) { if(e.target.id === id) this.closeModal(id); },

    handleFormspree: function(e, msg) {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.textContent = "Submitting...";
        btn.disabled = true;

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                this.showToast(msg);
                form.reset();
            } else {
                this.showToast('Something went wrong. Please call +64 21 712 912.');
            }
        }).catch(() => {
            this.showToast('Network error. Please call Rajiv directly.');
        }).finally(() => {
            btn.textContent = orig;
            btn.disabled = false;
        });
    },

    showToast: function(msg) {
        const cont = document.getElementById('toast-container');
        const t = document.createElement('div');
        t.className = 'toast'; t.innerHTML = `✅ ${msg}`;
        cont.appendChild(t);
        setTimeout(() => t.remove(), 4500);
    }
};

window.addEventListener('DOMContentLoaded', () => app.init());
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if(hash) app.navigate(hash);
});
document.addEventListener('keydown', e => { 
    if(e.key === 'Escape') {
        app.closeAllModals();
        document.getElementById('lightbox').classList.remove('active');
    } 
});