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

    // Menampilkan daftar matakuliah Sastra Jepang
    it('Show list of Japanese Studies courses', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('KURIKULUM').click()
            cy.contains('Matakuliah').click()
            cy.get('select[name="cari[KodeProdi]"]').select('SASTRA JEPANG - S1 Reguler')
            cy.contains('Tampilkan').click()

            cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('3153') // assertion
        })
    })

    // Menampilkan daftar matakuliah Sastra Indonesia
    it('Show list of Indonesian Studies courses', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('KURIKULUM').click()
            cy.contains('Matakuliah').click()
            cy.get('select[name="cari[KodeProdi]"]').select('SASTRA INDONESIA - S1 Reguler')
            cy.contains('Tampilkan').click()

            cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('3152') // assertion
        })
    })

    // Menampilkan daftar matakuliah Ilmu Sejarah
    it('Show list of History courses', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('KURIKULUM').click()
            cy.contains('Matakuliah').click()
            cy.get('select[name="cari[KodeProdi]"]').select('ILMU SEJARAH - S1 Reguler')
            cy.contains('Tampilkan').click()

            cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('80201') // assertion
        })
    })

    // Menambahkan matakuliah baru ke Sastra Inggris
    it.only('Add new course of English Literature', () => {
        
        cy.fixture("login-with-valid-credential").then(user => {
            const username = user.username
            const password = user.password

            cy.LoginWithValidCredential(username, password)

            cy.get('body')

            cy.contains('KURIKULUM').click()
            cy.contains('Matakuliah').click()
            cy.get('select[name="cari[KodeProdi]"]').select('SASTRA INGGRIS - S1 Reguler')
            cy.contains('Tampilkan').click()
            cy.contains('Tambah Mata Kuliah Baru').click()

            cy.get('.box-title').contains('Tambah Matakuliah Baru') // assertion

            // Input data yang wajib diisi
            cy.get("[name='kode[Matakuliah]']").type('BI001') // kode matakuliah
            cy.get("[name='nama[MatakuliahInd]']").type('Bahasa Indonesia') // masukkan nama matkul
            // cy.get('select[name="sifat[Matakuliah]"]').select('[W] Wajib Program Studi')
            cy.get('select[name="sifat[Matakuliah]"]').select('[W] Wajib Nasional') // pilih sifat matkul
            // cy.get('select[name="jenis_kurikulum"]').select('A - Inti')
            cy.get('select[name="jenis_kurikulum"]').select('B - Institusi') // masukkan jenis kurikulum
            cy.get("[name='jumlahsks[Teori]']").type('3') // masukkan SKS teori
            cy.get('select[name="paket[Semester]"]').select('1')
            cy.get('[name="submit"]').click()

            cy.get('h3.box-title').contains('Daftar Matakuliah') // assertion
        })
    })
    
})