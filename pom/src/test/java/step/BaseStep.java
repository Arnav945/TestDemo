package step;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import data.model.EnvironmentSetting;

public class BaseStep {
	protected WebDriver driver;
	protected String chromeDriverPath = "C:\\chromedriver.exe";
	protected EnvironmentSetting environmentSetting = new EnvironmentSetting();
	public BaseStep()
	{
		System.setProperty("webdriver.chrome.driver", chromeDriverPath);
		driver = new ChromeDriver();
		driver
			.manage()
			.timeouts()
			.implicitlyWait(30, TimeUnit.SECONDS);
	}	
}
