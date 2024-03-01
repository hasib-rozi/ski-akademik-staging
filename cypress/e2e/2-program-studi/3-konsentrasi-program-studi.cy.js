/// <reference types="Cypress" />

describe('Matakuliah', () => {
    before(() => {
        cy.visit('https://staging.ecampuz.com/app/develop-v.3/eakademik/', {auth: {
            username: 'saasku',
            password: 'sang2022it'
        }})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    // Menampilkan konentrasi prodi Sastra Inggris
    it('Show specialization of Japanese Studies courses', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('PROGRAM STUDI').click()
            cy.contains('Konsentrasi Program Studi').click()
            cy.get('select[name="pilih_prodi"]').select('SASTRA INGGRIS - S1 Reguler')
            cy.contains('Cari').click()

            cy.get('.odd > :nth-child(3)').contains('SASTRA INGGRIS')
        })
    })

   // Menampilkan konentrasi prodi Ilmu Sejarah
   it('Show specialization of History Sciences courses', () => {
        
    cy.fixture("login-with-valid-credential").then(user => {
        const username = user.username
        const password = user.password

        cy.LoginWithValidCredential(username, password)

        cy.get('body')

        cy.contains('PROGRAM STUDI').click()
        cy.contains('Konsentrasi Program Studi').click()
        cy.get('select[name="pilih_prodi"]').select('ILMU SEJARAH - S1 Reguler')
        cy.contains('Cari').click()

        cy.get('.odd > :nth-child(3)').contains('ILMU SEJARAH')
    })
})

// Menambahkan konentrasi baru pada prodi Sastra Inggris
it.only('Add a new specialization of History Sciences courses', () => {
        
    cy.fixture("login-with-valid-credential").then(user => {
        const username = user.username
        const password = user.password

        cy.LoginWithValidCredential(username, password)

        cy.get('body')

        cy.contains('PROGRAM STUDI').click()
        cy.contains('Konsentrasi Program Studi').click()
        cy.get('select[name="pilih_prodi"]').select('SASTRA INGGRIS - S1 Reguler')
        
        cy.contains('Cari').click()
        cy.contains('Tambah').click()

        cy.get('.box-title').contains('Tambah Data Konsentrasi')

        cy.get('#KODE_KONSENTRASI').type('ENCT')
        cy.get('#NAMA_KONSENTRASI').type('Cultural Studies')
        cy.get('input[name="submit"]').click({ force:true })

        cy.get('.odd > :nth-child(3)').contains('SASTRA INGGRIS') // assertion
    })
})
    
})