// import test, { expect } from "@fixtures/basePages"
import test from "playwright/test";
import LoginPage from "@pages/Login.page";
import newProjectPage from "@pages/NewProject.page";
import metaMaskPage from "@pages/metamask.page";
import componentPage from "@pages/Component.page";
import * as data from "@testData/login.cred.json";
import CollectionPage from "pages/admin/Collection.page";
import ENV from "@utils/env";
import ComponentPage from "@pages/Component.page";
import functions from "@testData/helper";

const getNumber = Math.floor(Math.random() * 10)


test('Campaign Create', async ({ page }) => {
        const loginPage = new LoginPage(page)
        const collectionPage = new CollectionPage(page)
        const functionss = new functions(page)





        await page.goto(ENV.BASE_URL, { timeout: 1200000, waitUntil: "domcontentloaded" })

        await loginPage.clickOnCookiesCheckBox()
        await loginPage.clickOnApproveBtn()
        await loginPage.login(ENV.ADMINEMAIL, ENV.ADMINPASSWORD)
        await page.waitForLoadState("networkidle")


        await collectionPage.clickOnPresellUitility()
        await collectionPage.clickOnPreselCampaignBtn()

        await collectionPage.clickCreateNewCampaignBtn()

        await collectionPage.inputPresellCampaignName(data.collecionName[1])

        await collectionPage.clickToSelectBlockChainMintsForCampaign(data.blickChainMintList[3])

        await collectionPage.clickToSelectCollectioonTypeForCampaign(data.collectionType[3])

        await collectionPage.selectNFTPriceToken(data.nftPriceTokenListBox[0])

        await collectionPage.inputNFTPrice(data.nftPrice[0])

        await collectionPage.inputCampaignStartDate(data.campiagnStartDate)
        await collectionPage.inputCampaignEndDate(data.campiagnEndDate)

        await functionss.imageUploadHelper()
        await collectionPage.clickOnChooseBtn()



        await collectionPage.inputCampaignNFTName(data.collecionName[0])
        await collectionPage.inputCampaignNFTDescription(data.getDescription)

        await collectionPage.checkJoinExclulsiveGroup()

        await collectionPage.selectDescountSubscription(data.subscriptionOfferList)
        await collectionPage.inputDescountParcentage(data.subscriptionPercantage)

        await collectionPage.selectSubscriptionDuration(data.subscriptionDuration)

        await collectionPage.clickOnCreatePresellCampaignBtn()












});

