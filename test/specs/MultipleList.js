describe('suite', () => {
    it('test', async () => {
        expectedList = ['Friday, Nov 15','28°C','Messages', 'Chrome']
        actualList = []

        const listValues = await $$('android.widget.TextView')

        for(const ele of listValues){
            actualList.push(await ele.getText())
        }

        expect(actualList).toEqual(expectedList);
    })
})

