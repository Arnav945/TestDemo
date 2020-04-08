package data.instance;

import java.util.HashMap;

import org.openqa.selenium.NotFoundException;

import data.model.ObjectMap;
import data.model.SelectByType;
import data.seeder.ObjectMapSeeder;

public class ObjectMaps {
	private HashMap<String, ObjectMap> data = null;
	private static ObjectMaps instance;
	private ObjectMaps()
	{
		data = new HashMap<String, ObjectMap>();
	}
	static public ObjectMaps getInstance()
	{
		if(instance == null)
		{
			instance = new ObjectMaps();
		}
		return instance;
	}
	
	public void add(String name, SelectByType selectBy, String selectValue) {
		data.put(
			name, 
			new ObjectMap(name, selectBy, selectValue)
		);
	}
	public void add(ObjectMap objectMap) {
		data.put(
			objectMap.Name, 
			objectMap
		);
	}
	public ObjectMap get(String name) {
		if(data.size()==0)
		{
			new ObjectMapSeeder().seed();
		}
		if(!data.containsKey(name))
		{
			throw new NotFoundException(name + " does not exist in ObjectMap.");
		}
		return data.get(name);
	}
	
}
