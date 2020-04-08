package step;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import data.utils.ObjectMapUtil;


public class EBSStep extends BaseStep {
	@Given("^Testing environment is (.+)$")
	public void testing_environment_is(String systemLevel) throws Throwable {
		environmentSetting.SystemLevel = systemLevel;
		driver.manage().window().maximize();
	}
	
	@Given("^User login to (.+)$")
	public void user_login_to(String systemName) throws Throwable {
		String urlName = "Url." + systemName + "." + environmentSetting.SystemLevel;
		String url = ObjectMapUtil.getObjectMap(urlName).SelectValue;
		driver.get(url);
		driver.findElement(By.id("username")).sendKeys("3725402");
		driver.findElement(By.id("password")).sendKeys("3725402");
		driver.findElement(By.id("submit")).click();
	}
	
	@When("^User switches to frame (.+)")
    public void user_switches_to_frame(String frame) throws Throwable {
		driver.switchTo().parentFrame();
        driver.switchTo().frame(
                driver.findElement(By.xpath("//iframe[contains(@title,'"+frame+"')]"))
        );
    }
	
	@When("^User opens New Case$")
	public void user_clicks_on_New_Case() throws Throwable {
		//driver.get("http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1/-gcUw-r-G7tNUXcGEr5TLL1yiO3mOc82*/!STANDARD?pyActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_EBSUserPortal&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DEBSUserPortal%26Name%3D%20EBSUserPortal%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_EBSUserPortal%26launchPortal%3Dtrue&bPurgeTargetThread=true&portalThreadName=STANDARD&portalName=Developer&target=popup&pzHarnessID=HID0C46C4AA39244AD52E8736445732177C");
		driver.findElement(By.xpath("//*[normalize-space(text())='Launch']")).click();
		driver.findElement(By.xpath("//li[@title='New Case']")).click();
		driver.switchTo().frame(driver.findElement(By.xpath("//iframe[@title='New Case']"))); 
	}

	@When("^User clicks on (.+)$")
    public void user_clicks_on(String object) throws Throwable {
		ObjectMapUtil.getWebElement(driver, object).click();
    }
	
	@When("^User types \"(.+)\" on (.+)$")
    public void user_types_on(String value, String object) throws Throwable {
		ObjectMapUtil.getWebElement(driver, object).sendKeys(value);
    }

	@When("^User selects \"(.+)\" on (.+)$")
    public void user_selects_on(String value, String object) throws Throwable {
		new Select(ObjectMapUtil.getWebElement(driver, object))
			.selectByVisibleText(value);
    }

	@When("^User waits for (.+)s")
    public void user_waits_for(int seconds) throws Throwable {
		Thread.sleep(seconds * 1000);
    }

	@Before
    public void Initialize(){
        System.out.println("This will run before the Scenario");
    } 
 
	@After
    public void Cleanup(){
		driver.quit();
        System.out.println("This will run after the Scenario");
    }
}
