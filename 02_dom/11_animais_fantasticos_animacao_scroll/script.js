//accordion list

// isolar função / escopo : para isso usar função por exemplo e não esquecer de ativar a mesma

function initialTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    
    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')
        
        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function() {
                activeTab(index)
            })
        }) 
    }
}

initialTabNav()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativeClass = 'ativo'
    if(accordionList.length) {
        accordionList[0].classList.add(ativeClass)
        //accordionList[0].classList.nextElementSibling.classList.add(ativeClass)
        
        function activeAccordion() {
        //function activeAccordion(e) {
            //console.log(e.currentTarget)
            this.classList.toggle(ativeClass)
            this.nextElementSibling.classList.toggle(ativeClass)
        }
        
        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion()

function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    //console.log(linksInternos)
    
    function scrollToSection(e) {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // forma alternativa
        // const topo = section.offsetTop
        // console.log(topo)
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }
    
    // adicionar evento a cada item
    linksInternos.forEach(item => {
        item.addEventListener('click', scrollToSection)
    })    
}
initScrollSmooth();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')
    
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6; // 60% do valor
        
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }
        animaScroll();
        
        // é no window, pois é scroll geral
        window.addEventListener('scroll', animaScroll)
    }
}
initAnimacaoScroll();