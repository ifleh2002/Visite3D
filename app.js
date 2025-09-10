// Smooth scroll functionality
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Demo request functionality
function showDemoRequest() {
  showNotification('🚀 Demande de démo envoyée ! Notre équipe vous contactera sous peu au +212 661 144 190', 'success');
  
  // Add vibrant animation effect
  const button = event.target;
  button.style.transform = 'scale(0.95)';
  button.style.background = 'linear-gradient(45deg, #00CC66, #0066FF)';
  
  setTimeout(() => {
    button.style.transform = 'scale(1)';
    button.style.background = 'linear-gradient(45deg, var(--color-vivid-orange), var(--color-coral-red))';
  }, 150);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Enhanced smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav__menu a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Add vibrant hover effect
      this.style.color = 'var(--color-electric-blue)';
      setTimeout(() => {
        this.style.color = '';
      }, 300);
    });
  });

  // Smooth scrolling for footer links
  const footerLinks = document.querySelectorAll('.footer__column a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Enhanced Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Add vibrant color flash effect on reveal
        const colors = ['var(--color-electric-blue)', 'var(--color-vivid-orange)', 'var(--color-lime-green)', 'var(--color-electric-purple)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        entry.target.style.borderColor = randomColor;
        
        setTimeout(() => {
          entry.target.style.borderColor = '';
        }, 600);
      }
    });
  }, observerOptions);

  // Animate service cards with vibrant effects
  const serviceCards = document.querySelectorAll('.service__card');
  serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`;
    observer.observe(card);
    
    // Enhanced hover effects with vibrant colors
    card.addEventListener('mouseenter', function() {
      const colors = ['var(--color-electric-blue)', 'var(--color-lime-green)', 'var(--color-vivid-orange)'];
      this.style.boxShadow = `0 25px 50px ${colors[index % 3]}33`;
      this.style.transform = 'translateY(-12px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (this.style.opacity === '1') {
        this.style.transform = 'translateY(0) rotate(0deg)';
        this.style.boxShadow = '';
      } else {
        this.style.transform = 'translateY(30px)';
      }
    });
  });

  // Animate hotel cards with special effects
  const hotelCards = document.querySelectorAll('.hotel__card');
  hotelCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.3}s`;
    observer.observe(card);
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(153, 51, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (this.style.opacity === '1') {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
      } else {
        this.style.transform = 'translateY(30px) scale(1)';
      }
    });
  });

  // Animate feature cards with electric effects
  const featureCards = document.querySelectorAll('.feature__card');
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`;
    observer.observe(card);
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) rotateX(5deg)';
      this.style.boxShadow = '0 25px 50px rgba(153, 51, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (this.style.opacity === '1') {
        this.style.transform = 'translateY(0) rotateX(0deg)';
        this.style.boxShadow = '';
      } else {
        this.style.transform = 'translateY(30px) rotateX(0deg)';
      }
    });
  });

  // Animate step cards with sequential vibrant colors
  const stepCards = document.querySelectorAll('.step__card');
  stepCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.3}s`;
    observer.observe(card);
  });

  // Animate testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial__card');
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`;
    observer.observe(card);
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (this.style.opacity === '1') {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
      } else {
        this.style.transform = 'translateY(30px) scale(1)';
      }
    });
  });

  // Enhanced ROI stats animation with vibrant colors
  const roiItems = document.querySelectorAll('.roi__item');
  roiItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px) scale(0.9)';
    item.style.transition = `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
    observer.observe(item);
    
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.05)';
      const colors = ['var(--color-electric-blue)', 'var(--color-lime-green)', 'var(--color-vivid-orange)', 'var(--color-electric-purple)', 'var(--color-coral-red)'];
      this.style.boxShadow = `0 15px 35px ${colors[index % colors.length]}33`;
    });
    
    item.addEventListener('mouseleave', function() {
      if (this.style.opacity === '1') {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
      } else {
        this.style.transform = 'translateY(20px) scale(0.9)';
      }
    });
  });

  // Enhanced counter animation with vibrant effects
  function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    const colors = ['var(--color-electric-blue)', 'var(--color-vivid-orange)', 'var(--color-lime-green)', 'var(--color-electric-purple)', 'var(--color-coral-red)'];
    let colorIndex = 0;
    
    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start) + suffix;
        // Change color during animation
        if (Math.floor(start) % 10 === 0) {
          element.style.color = colors[colorIndex % colors.length];
          colorIndex++;
        }
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + suffix;
        // Final vibrant pulse
        element.style.transform = 'scale(1.1)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }
    }
    
    updateCounter();
  }

  // Enhanced stats observer with vibrant counter animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const number = entry.target.querySelector('.stat__number');
        const text = number.textContent;
        
        // Extract numeric value for animation
        const match = text.match(/([+-]?\d+)/);
        if (match) {
          const targetValue = parseInt(match[1]);
          const prefix = text.includes('+') ? '+' : text.includes('-') ? '' : '';
          const suffix = text.replace(/[+-]?\d+/, '');
          
          number.textContent = '0' + suffix;
          
          setTimeout(() => {
            animateCounter({
              textContent: (value) => {
                number.textContent = prefix + value + suffix.replace(/^\d*/, '');
              },
              style: number.style
            }, Math.abs(targetValue), 2000);
          }, 500);
        }
        
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // Observe hero stats and hotel stats
  const heroStats = document.querySelectorAll('.stat');
  heroStats.forEach(stat => {
    statsObserver.observe(stat);
  });

  const hotelStats = document.querySelectorAll('.stat__item');
  hotelStats.forEach(stat => {
    statsObserver.observe(stat);
  });

  // Enhanced notification system with vibrant styling
  function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification__content">
        <span class="notification__message">${message}</span>
        <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
      </div>
    `;

    // Enhanced vibrant styling for notification
    const vibrantColors = {
      success: 'linear-gradient(45deg, var(--color-lime-green), var(--color-electric-blue))',
      error: 'linear-gradient(45deg, var(--color-coral-red), var(--color-electric-purple))',
      warning: 'linear-gradient(45deg, var(--color-golden-yellow), var(--color-vivid-orange))',
      info: 'linear-gradient(45deg, var(--color-electric-blue), var(--color-electric-purple))'
    };

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${vibrantColors[type] || vibrantColors.info};
      color: white;
      border-radius: var(--radius-lg);
      padding: var(--space-20);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      max-width: 400px;
      opacity: 0;
      transform: translateX(100%) scale(0.8);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 2px solid rgba(255, 255, 255, 0.3);
    `;

    const content = notification.querySelector('.notification__content');
    content.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-16);
    `;

    const message_el = notification.querySelector('.notification__message');
    message_el.style.cssText = `
      color: white;
      font-size: var(--font-size-sm);
      line-height: var(--line-height-normal);
      font-weight: var(--font-weight-medium);
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    `;

    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.style.cssText = `
      background: rgba(255, 255, 255, 0.2);
      border: none;
      font-size: var(--font-size-lg);
      color: white;
      cursor: pointer;
      padding: 0;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-full);
      font-weight: bold;
      transition: all var(--duration-fast) var(--ease-standard);
    `;

    closeBtn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 255, 255, 0.3)';
      this.style.transform = 'scale(1.1)';
    });

    closeBtn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(255, 255, 255, 0.2)';
      this.style.transform = 'scale(1)';
    });

    document.body.appendChild(notification);

    // Enhanced animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0) scale(1)';
    });

    // Auto remove after 6 seconds with enhanced animation
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove();
          }
        }, 400);
      }
    }, 6000);
  }

  // Make showNotification globally available
  window.showNotification = showNotification;

  // Enhanced parallax effect for hero section with vibrant colors
  const hero = document.querySelector('.hero');
  const heroImage = document.querySelector('.hero__image img');
  
  if (hero && heroImage) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2;
      
      if (scrolled < hero.offsetTop + hero.offsetHeight) {
        heroImage.style.transform = `translateY(${rate}px) scale(${1 + scrolled * 0.0001})`;
      }
    });
  }

  // Enhanced loading effect for images with vibrant transitions
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1)';
      
      // Add a vibrant flash effect
      const colors = ['var(--color-electric-blue)', 'var(--color-vivid-orange)', 'var(--color-lime-green)', 'var(--color-electric-purple)'];
      this.style.filter = `drop-shadow(0 0 20px ${colors[index % colors.length]}66)`;
      setTimeout(() => {
        this.style.filter = '';
      }, 1000);
    });
    
    // Set initial state
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    img.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    
    // If already loaded
    if (img.complete) {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }
  });

  // Enhanced mobile menu functionality with vibrant effects
  function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const navMenu = document.querySelector('.nav__menu');
    
    if (window.innerWidth <= 768 && navMenu) {
      navMenu.style.display = 'none';
      
      // Add mobile menu button if not exists
      if (!document.querySelector('.mobile-menu-btn')) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.style.cssText = `
          background: linear-gradient(45deg, var(--color-electric-blue), var(--color-electric-purple));
          border: none;
          color: white;
          padding: var(--space-8);
          border-radius: var(--radius-base);
          font-size: var(--font-size-lg);
          cursor: pointer;
          transition: all var(--duration-normal) var(--ease-standard);
        `;
        
        menuBtn.addEventListener('click', function() {
          navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
          this.style.transform = this.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
        });
        
        nav.querySelector('.container').appendChild(menuBtn);
      }
    } else if (navMenu) {
      navMenu.style.display = 'flex';
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (mobileBtn) {
        mobileBtn.remove();
      }
    }
  }
  
  window.addEventListener('resize', createMobileMenu);
  createMobileMenu();

  // Add vibrant scroll indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--color-electric-blue), var(--color-electric-purple), var(--color-coral-red), var(--color-vivid-orange), var(--color-lime-green), var(--color-golden-yellow));
    z-index: 1001;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(scrollIndicator);

  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  });

  // Add vibrant particle effect to key sections
  function createParticles(container, count = 5) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--color-electric-blue);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        animation: float 8s infinite ease-in-out;
        animation-delay: ${i * 1.6}s;
      `;
      
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      container.style.position = 'relative';
      container.appendChild(particle);
    }
  }

  // Add particles to hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    createParticles(heroSection);
  }

  // Add CSS animation for particles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0%, 100% { 
        opacity: 0;
        transform: translateY(0) rotate(0deg);
      }
      50% { 
        opacity: 0.7;
        transform: translateY(-50px) rotate(180deg);
      }
    }
  `;
  document.head.appendChild(style);

  // Enhanced table responsiveness with vibrant indicators
  const table = document.querySelector('.table');
  if (table) {
    const tableWrapper = table.parentNode;
    
    function updateScrollIndicators() {
      const isScrolledLeft = tableWrapper.scrollLeft > 0;
      const isScrolledRight = tableWrapper.scrollLeft < (tableWrapper.scrollWidth - tableWrapper.clientWidth - 1);
      
      tableWrapper.classList.toggle('scrolled-left', isScrolledLeft);
      tableWrapper.classList.toggle('scrolled-right', isScrolledRight);
    }
    
    tableWrapper.addEventListener('scroll', updateScrollIndicators);
    window.addEventListener('resize', updateScrollIndicators);
    updateScrollIndicators();
  }

  // Add vibrant pulsing effect to important elements
  const pulsingElements = document.querySelectorAll('.btn--primary, .step__number');
  pulsingElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.animation = 'pulse 1s ease-in-out infinite';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.animation = '';
    });
  });

  // Add CSS for pulse animation
  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `;
  document.head.appendChild(pulseStyle);

  console.log('🚀 visite3D application with vibrant colors initialized successfully! ⚡');
});