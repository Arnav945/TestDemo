package data.utils;

import javax.naming.InvalidNameException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import data.instance.ObjectMaps;
import data.model.ObjectMap;

public class ObjectMapUtil {
	public static WebElement getWebElement(WebDriver driver, String name) throws InvalidNameException
	{
		ObjectMap objectMap = getObjectMap(name);
		String value = objectMap.SelectValue;
		switch(objectMap.SelectBy)
		{
			case XPath:
				return driver.findElement(By.xpath(value));
			case CssSelector:
				return driver.findElement(By.cssSelector(value));
			case Name:
				return driver.findElement(By.name(value));
			case ClassName:
				return driver.findElement(By.className(value));
			case Id:
				return driver.findElement(By.id(value));
			default:
				throw new InvalidNameException(name + " is not a valid WebElement.");
		}
	}
	
	public static ObjectMap getObjectMap(String name)
	{
		ObjectMaps objectMaps = ObjectMaps.getInstance();
		return objectMaps.get(name);
	}
}