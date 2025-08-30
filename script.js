// Variáveis globais
let currentIndex = null;
const transitionTime = 1000;

// Função principal para mostrar conteúdo das abas
function showContent(index) {
    const sections = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tab');

    if (currentIndex === index) {
        // Restaurar estado original
        tabs.forEach((tab, i) => {
            tab.classList.remove('tab-hidden', 'tab-active');
            tab.style.left = (i * 40) + 'px';
        });

        sections.forEach(sec => sec.classList.add('hidden'));
        document.getElementById('content1').classList.remove('hidden');
        currentIndex = null;
    } else {
        sections.forEach(sec => sec.classList.add('hidden'));

        tabs.forEach((tab, i) => {
            tab.classList.remove('tab-hidden', 'tab-active');
            if (i === index - 1) {
                tab.classList.add('tab-active');
            } else {
                tab.classList.add('tab-hidden');
            }
        });

        setTimeout(() => {
            document.getElementById('content' + index).classList.remove('hidden');
        }, transitionTime);

        currentIndex = index;
    }
}
//pop up animado da gif selecionada
document.querySelectorAll('.content1[data-gif]').forEach(card => {
    const gifPopup = document.createElement('div');
    gifPopup.classList.add('gif-popup');
    gifPopup.innerHTML = `<img src="${card.dataset.gif}" alt="Gif do card">`;
    document.body.appendChild(gifPopup);

    card.addEventListener('mouseenter', () => {
        const rect = card.getBoundingClientRect();
        gifPopup.style.left = rect.left + rect.width / 2 + 'px';
        gifPopup.style.top = rect.top - 130 + window.scrollY + 'px';
        gifPopup.style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        gifPopup.style.display = 'none';
    });
});
// Função para mostrar mensagens do mascote por seção
function showMascotMessageBySection() {
    const messages = {
        'content1': `
            <h2>👋 Olá, eu sou o RoboEdu!</h2>
            <p>Sou seu assistente virtual! Clique nas abas coloridas para explorar todos os recursos educacionais.</p>
            <p><strong>💡 Dica:</strong> Clique nas abas interativas para navegar entre as seções ou clique novamente para retornar!</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
                <p style="margin-top: 1rem;">📍 Navegue pelas abas coloridas para acessar cada conteúdo!</p>
            </div>
        `,
        'content2': `
            <h2>👋 RoboEdu:</h2>
            <p>Aqui está o Núcleo de Educação Digital! Você encontrará documentos e informações sobre sua estrutura e funcionamento no município.</p>
            <p>Entre com login e senha para adicionar ou remover seus conteúdos</p>
            <p><strong>💡 Dica:</strong> Explore os organogramas, diretrizes e protocolos disponíveis nesta seção.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `,
        'content3': `
            <h2>👋 RoboEdu:</h2>
            <p>Veja os documentos curriculares e orientações pedagógicas que fundamentam a educação municipal.</p>
            <p><strong>💡 Dica:</strong> Acesse currículos, BNCC e diretrizes municipais para enriquecer sua prática pedagógica.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `,
        'content4': `
            <h2>👋 RoboEdu:</h2>
            <p>Descubra recursos de educação digital e midiático para transformar sua sala de aula.</p>
            <p><strong>💡 Dica:</strong> Explore tutoriais, ferramentas e metodologias voltadas para literacia digital.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `,
        'content5': `
            <h2>👋 RoboEdu:</h2>
            <p>Conheça os projetos inovadores desenvolvidos pela rede municipal de ensino.</p>
            <p><strong>💡 Dica:</strong> Veja cases, relatórios e boas práticas que inspiram transformação digital na educação.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `,
        'content6': `
            <h2>👋 RoboEdu:</h2>
            <p>Explore ferramentas e recursos educacionais pensados para apoiar o ensino digital.</p>
            <p>Entre com login e senha para adicionar ou remover seus conteúdos</p>
            <p><strong>💡 Dica:</strong> Navegue por apps, jogos e plataformas educativas disponíveis nesta seção.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `,
        'content7': `
            <h2>👋 RoboEdu:</h2>
            <p>Encontre cursos de formação e capacitação para educadores da rede municipal.</p>
            <p>Entre com login e senha para adicionar ou remover seus conteúdos</p>
            <p><strong>💡 Dica:</strong> Confira cronogramas, inscrições e certificações disponíveis para você.</p>
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="closeCustomAlert()" style="background: #42519C; color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer;">Entendi!</button>
            </div>
        `
    };

    const activeSection = Array.from(document.querySelectorAll('.section'))
        .find(section => !section.classList.contains('hidden'));

    const sectionId = activeSection?.id || 'content1';
    const message = messages[sectionId];

    showCustomAlert(message);
}

// Função para mostrar alert customizado
function showCustomAlert(htmlContent) {
    const modal = document.getElementById('customAlert');
    const messageBox = document.getElementById('customAlertMessage');
    messageBox.innerHTML = htmlContent;
    modal.style.display = 'block';
}

// Função para fechar alert customizado
function closeCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

// Função para mostrar mensagem do mascote
function showMascotMessage() {
    document.getElementById('mascotModal').style.display = 'block';
}

// Função para fechar modal
function closeModal() {
    document.getElementById('mascotModal').style.display = 'none';
}

// Função openSection (mencionada no HTML mas não implementada)
function openSection(sectionName) {
    console.log('Abrindo seção:', sectionName);
    // Implementar lógica específica se necessário
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    // Fechar modal ao clicar fora
    window.onclick = function (event) {
        const modal = document.getElementById('mascotModal');
        const customAlert = document.getElementById('customAlert');

        if (event.target == modal) {
            modal.style.display = 'none';
        }

        if (event.target == customAlert) {
            customAlert.style.display = 'none';
        }
    };

    // Rolagem suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});