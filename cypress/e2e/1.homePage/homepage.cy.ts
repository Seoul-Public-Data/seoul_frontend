/* eslint-disable no-undef */

describe('홈 화면', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/report',
    },
    {
      fixture: 'getReport.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/firestation?userLat=*&userLon=*',
    },
    {
      fixture: 'getFireStation.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/safetycenter?userLat=*&userLon=*',
    },
    {
      fixture: 'getSafetyCenter.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/cctv?userLat=*&userLon=*',
    },
    {
      fixture: 'getCCTV.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/safetyfacility?userLat=*&userLon=*',
    },
    {
      fixture: 'getSafetyFacility.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/heatshelter?userLat=*&userLon=*',
    },
    {
      fixture: 'getHeatShelter.json',
    }
    );
    cy.intercept({
      method: 'GET',
      url: 'https://wemate.site/api/emergencybell?userLat=*&userLon=*',
    },
    {
      fixture: 'getEmergencyBell.json',
    }
    );
  });
  it('홈 화면에 접근했을 때 모든 요소들이 로드 된다.', () => {
    cy.get('[data-cy=routeFindBtn]').should('be.exist').and('be.visible');
    cy.get('input[placeholder="도착지를 입력하세요"]').should('be.exist').and('be.visible');

    // cy.intercept({
    //   method: 'GET',
    //   url: 'https://apis.openapi.sk.com/tmap/geo/reversegeocoding?version=1&format=json&coordType=*&addressType=*&lon=*&lat=*',
    // }).as('reverseGeocoding');
    // cy.wait('@reverseGeocoding');
    cy.get('#map_div').should('be.exist').and('be.visible').children().should('have.length.greaterThan', 0);

    cy.get('[data-cy=bottomSheet_handle]').should('be.exist').and('be.visible');
    cy.get('[data-cy=bottomSheet_checkbox]').should('be.exist').and('be.visible');
    cy.get('[data-cy=filterBtnWrapper] button')
      .then(($buttons) => {
        const expectedTexts = ['CCTV', '안전시설', '소방서', '무더위 쉼터', '안전센터', '비상벨'];
        $buttons.each((index, button) => {
          const $button = Cypress.$(button);
          const expectedText = expectedTexts[index];

          cy.wrap($button)
            .as(`button-${expectedText.toLowerCase().replace(/\s+/g, '-')}`)
            .should('have.text', expectedText);
        });
      });
  });
  it('검색 input에 입력했을 때, 내 위치와 연관 검색어가 로드된다.', () => {
    // given : input창이 로드 된다.
    cy.get('input[placeholder="도착지를 입력하세요"]').should('be.exist').and('be.visible').as('destination_input');
    // when : input에 입력했을 때,
    cy.get('@destination_input').type('아');
    // then : 내 위치와 연관 검색어가 로드된다.
    cy.get('[data-cy=myPositionButton]').should('be.exist').and('be.visible');
    cy.get('[data-cy=searchResultWrapper]').should('be.exist').and('be.visible').children().should('have.length.greaterThan', 1);
  });
});
