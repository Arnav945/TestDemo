package runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "classpath:feature/F001",
 glue = "step",
 plugin= {"pretty", "html:target/cucumber"}
 )

public class TestRunner {
	@BeforeClass
    public static void init(){
		
    }
	
	@AfterClass
    public static void cleanup(){
       
    }
}
