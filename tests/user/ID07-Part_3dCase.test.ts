import test, { expect } from "@fixtures/basePages"
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import * as data from "@testData/login.cred.json";
import ENV from "@utils/env";


test('ID-Parts-3DCase-001 | User |  Validate User Can Successfully Part Wit 3D Case', async ({ page }) => {
        /*
          This test case verifies that a user can successfully part with a 3D case.
          It involves the following steps:
          - Logging in as a user.
          - Navigating to the dashboard.
          - Accessing the "Add Part" section.
          - Selecting the 3D case option.
          - Verifying the selection and proceeding to customization.
          - Customizing the 3D case as per requirements.
          - Adding the customized 3D case to the cart.
          - Verifying that the 3D case is successfully added to the cart.
        */


        await page.goto(ENV.BASE_URL+ENV.PROJECT_CREATE, { waitUntil: "domcontentloaded" })

        const pages = page.context().pages()
        console.log(pages.length);

        const loginPage = new LoginPage(page)
        const metaMask = new metaMaskPage(pages[0])
        const newProjectPages = new newProjectPage(page)

        await pages[0].goto(ENV.META_URL, { waitUntil: "domcontentloaded" })
        await metaMask.metaMaskUnlockHelper()
        
        //click search btn
        await newProjectPages.clickOnPartsSectionSearchBtn()

        //click on parts catagory sectoin
        await newProjectPages.clickOnPartCatagorySection()
        //click on catagory public button
        await newProjectPages.clickOnCatagoryPublicBtn()

        //click on catagory public button
        await newProjectPages.clickOnPartBtn()

        //click on catagory public button
        await newProjectPages.clickOnUseBtn()

        //click search btn
        await newProjectPages.clickOnPartsSectionSearchBtn()

        await newProjectPages.IfAlertTextIsVisibleThenClickOnIt()

        //click on electron page next button
        await newProjectPages.clickNextBtn()

        //input part name
        await newProjectPages.inputPartName()

        //input descripitin
        await newProjectPages.inputPartDescriptoin()

        //click on Select Catagory Selection
        await newProjectPages.clickOnSelectCatagorySection()

        //clickToSelectCatagory
        await newProjectPages.clickToSelectCatagory()

        //click OnShowOnCustomizeBtn
        await newProjectPages.clickOnShowOnCustomizeBtn()

        //click on the next step button
        await newProjectPages.clickOnNextStepBtn()
        //Choose Block Chain Mint
        await newProjectPages.clickToChooseBlockChainMint("Mumbai Testnet (Polygon)")
        //Click on Choose Collection section
        await newProjectPages.clickToChooseProjectCollections()
        //select collection
        await newProjectPages.clickToChooseProjectCollection("1")

        //input Part Privet Price
        await newProjectPages.inputPartPrivetPrice()

        //input Commarcial Price
        await newProjectPages.inputCommarcialPrice()
        //click on the confirm checkbox
        await newProjectPages.clickOnTheConfirmCheckBox()
        //click on the next step button
        await newProjectPages.clickOnNextStepBtn()


        await newProjectPages.clickOnConnectWalletBtn()
        //Click On metamask button
        // let newOne = null;
        await newProjectPages.clickOnMetaMaskBtn()

      

        await newProjectPages.clickOnContinueButton()
        // await page.waitForLoadState("load")



        //Click On Agree Btn
        await newProjectPages.clickOnAGreeBtn()

        // await newProjectPages.clickOnAddNewPartBtn()



});

