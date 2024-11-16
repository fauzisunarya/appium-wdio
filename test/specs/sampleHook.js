describe("hooks", ()=>{
    before(async ()=>{
        console.log("Before Method")
    })
    after(()=>{
        console.log("After Suite")

    })
    beforeEach(()=>{
        console.log("Before each method")

    })
    afterEach(()=>{
        console.log("After each method")

    })
    it("TC1",()=>{
        console.log("Test case one")
    })
})