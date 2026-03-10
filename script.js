// ============================================
// MENU MOBILE
// ============================================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

// ============================================
// TEMA DARK/LIGHT
// ============================================

const themeToggle = document.getElementById("theme-toggle");

// Verificar preferência salva
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    
    // Salvar preferência
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

// ============================================
// CURSOR GLOW (efeito de brilho seguindo o mouse)
// ============================================

const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

// ============================================
// ANIMAÇÃO DOS NÚMEROS (estatísticas)
// ============================================

function animateNumbers() {
    const numbers = document.querySelectorAll(".stat-number");
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute("data-count"));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        updateNumber();
    });
}

// ============================================
// SCROLL REVEAL (animação ao scrollar)
// ============================================

function revealOnScroll() {
    const sections = document.querySelectorAll(".section");
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("visible");
        }
    });
}

// Executar ao carregar e ao scrollar
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
    revealOnScroll();
    animateNumbers();
});

// ============================================
// HEADER SCROLL (mudar estilo ao scrollar)
// ============================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ============================================
// NAVEGAÇÃO SUAVE
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ============================================
// VALIDAÇÃO DO FORMULÁRIO
// ============================================

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    
    // Remover classes de erro anteriores
    [nome, email, mensagem].forEach(field => {
        field.style.borderColor = "";
    });
    
    // Validar campos vazios
    let hasError = false;
    
    if (nome.value.trim() === "") {
        showError(nome, "Por favor, insira seu nome");
        hasError = true;
    }
    
    if (email.value.trim() === "") {
        showError(email, "Por favor, insira seu email");
        hasError = true;
    } else if (!validateEmail(email.value)) {
        showError(email, "Por favor, insira um email válido");
        hasError = true;
    }
    
    if (mensagem.value.trim() === "") {
        showError(mensagem, "Por favor, insira sua mensagem");
        hasError = true;
    }
    
    if (hasError) return;
    
    // Simular envio
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Enviando...</span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showSuccess();
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(field, message) {
    field.style.borderColor = "#ef4444";
    
    // Criar tooltip de erro
    const existingTooltip = field.parentElement.querySelector(".error-tooltip");
    if (existingTooltip) existingTooltip.remove();
    
    const tooltip = document.createElement("span");
    tooltip.className = "error-tooltip";
    tooltip.textContent = message;
    tooltip.style.cssText = `
        display: block;
        color: #ef4444;
        font-size: 0.8rem;
        margin-top: 4px;
    `;
    
    field.parentElement.appendChild(tooltip);
    
    // Remover após 3 segundos
    setTimeout(() => {
        tooltip.remove();
        field.style.borderColor = "";
    }, 3000);
}

function showSuccess() {
    // Criar modal de sucesso
    const modal = document.createElement("div");
    modal.className = "success-modal";
    modal.innerHTML = `
        <div class="success-content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3>Mensagem enviada!</h3>
            <p>Obrigado pelo contato. Responderei em breve!</p>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
    `;
    
    const content = modal.querySelector(".success-content");
    content.style.cssText = `
        background: var(--bg-card);
        padding: 3rem;
        border-radius: 1rem;
        text-align: center;
        border: 1px solid var(--border-color);
        animation: scaleIn 0.3s ease;
    `;
    
    content.querySelector("h3").style.cssText = `
        margin: 1.5rem 0 0.5rem;
        color: var(--text-primary);
        font-size: 1.5rem;
    `;
    
    content.querySelector("p").style.cssText = `
        color: var(--text-secondary);
    `;
    
    document.body.appendChild(modal);
    
    // Fechar ao clicar
    modal.addEventListener("click", () => {
        modal.style.animation = "fadeOut 0.3s ease forwards";
        setTimeout(() => modal.remove(), 300);
    });
    
    // Fechar automaticamente após 3 segundos
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.style.animation = "fadeOut 0.3s ease forwards";
            setTimeout(() => modal.remove(), 300);
        }
    }, 3000);
}

// ============================================
// EFEITO DE DIGITAÇÃO NO CÓDIGO
// ============================================

function typeWriter() {
    const codeBody = document.querySelector(".code-body code");
    if (!codeBody) return;
    
    const originalHTML = codeBody.innerHTML;
    const text = codeBody.textContent;
    codeBody.innerHTML = "";
    
    let i = 0;
    const speed = 30;
    
    function type() {
        if (i < text.length) {
            codeBody.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Restaurar formatação
            codeBody.innerHTML = originalHTML;
        }
    }
    
    // Iniciar após um delay
    setTimeout(type, 1000);
}

// Descomentar para ativar o efeito de digitação
// window.addEventListener("load", typeWriter);

// ============================================
// ADICIONAR ESTILOS DE ANIMAÇÃO
// ============================================

const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes scaleIn {
        from { 
            opacity: 0;
            transform: scale(0.9);
        }
        to { 
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// LINK ATIVO NA NAVEGAÇÃO
// ============================================

function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

// Adicionar estilo para link ativo
const activeStyle = document.createElement("style");
activeStyle.textContent = `
    .nav-link.active {
        color: var(--primary) !important;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);
