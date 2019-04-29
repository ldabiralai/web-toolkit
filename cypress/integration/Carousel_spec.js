describe('Carousel', () => {
  const moved = (selector, x, y) => {
    cy.get(selector)
      .should('have.css', 'transform')
      .and('eq', `matrix(1, 0, 0, 1, ${x}, ${y})`);
  };

  const drag = (selector, x, y) => {
    cy.get(selector)
      .trigger('mousedown', { which: 1 }) // left click
      .trigger('mousemove', { clientX: x, clientY: y })
      .trigger('mouseup', { force: true });
  };

  beforeEach(() => {
    cy.visitComponent('Components:Carousel:Carousel');
  });
  it('should display carousel', () => {
    cy.get('[data-test="carousel"]').should('have.length', 1);
  });
  it('should display navigation arrows', () => {
    cy.get('[data-test="carousel-arrow-left"]').should('have.length', 1);
    cy.get('[data-test="carousel-arrow-right"]').should('have.length', 1);
  });
  it('should scroll when clicking on arrow button', () => {
    // default position
    moved('[data-test="carousel-slider"]', 0, 0);

    // position after clicking right arrow
    cy.get('[data-test="carousel-arrow-right"]').click();
    moved('[data-test="carousel-slider"]', -108, 0);

    // position after clicking left arrow
    cy.get('[data-test="carousel-arrow-left"]').click();
    moved('[data-test="carousel-slider"]', 0, 0);
  });

  describe('Breakpoint: <900px', () => {
    it('should hide navigation arrows', () => {
      cy.viewport(899, 600); // resize to just below breakpoint boundary
      cy.get('[data-test="carousel-arrow-left"]').should('be.not.be.visible');
      cy.get('[data-test="carousel-arrow-right"]').should('be.not.be.visible');
    });
    it('should scroll when dragging slider', () => {
      drag('[data-test="carousel-slider"]', 410, 0);
      moved('[data-test="carousel-slider"]', -108, 0);
    });
  });
});
