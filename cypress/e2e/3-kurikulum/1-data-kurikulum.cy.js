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

    // Menambahkan data kurikulum Sastra Inggris
    it.only('Show list of English Studies curriculum', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('KURIKULUM').click()
            cy.contains('Data Kurikulum').click()
            cy.get('select[name="prodi[Kode]"]').select('SASTRA INGGRIS - S1 Reguler')
            cy.contains('OK').click()
            cy.get('.box-title').contains('SASTRA INGGRIS') // assertion

            cy.contains('Tambah').click()
            cy.get('.box-title').contains('Tambah Kurikulum') // assertion

            cy.get('#Nama').type('Kurikulum 2023')
            cy.get("[name='kur[Tahun]']").type('2023')
            cy.get("[name='kur[MasaStudiIdeal]']").type('8')
            cy.get("[name='kur[MasaStudiMaks]']").type('14')
            cy.get("[name='submit").click()
            cy.get('.box-title').contains('SASTRA INGGRIS') // assertion
        })
    })

    
    
})