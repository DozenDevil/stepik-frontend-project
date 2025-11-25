const btnUp = {
  el: document.querySelector('.scroll-top-btn'),
  show() {
    if (this.el.classList.contains('btn-hide') && !this.el.classList.contains('btn-hiding')) {
      this.el.classList.remove('btn-hide');
      this.el.classList.add('btn-hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-hiding');
      }, 200);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-hide') && !this.el.classList.contains('btn-hiding')) {
      this.el.classList.add('btn-hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-hide');
        this.el.classList.remove('btn-hiding');
      }, 200);
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 0 ? this.show() : this.hide();
    });
    document.querySelector('.scroll-top-btn').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.hide();
btnUp.addEventListener();