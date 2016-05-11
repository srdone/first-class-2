using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace api.Models
{
  public class TroopRepository : ITroopRepository
  {
    static ConcurrentDictionary<string, Scout> _troop = new ConcurrentDictionary<string, Scout>();
    
    public TroopRepository(){}
    
    public IEnumerable<Scout> GetAll()
    {
      return _troop.Values;
    }
    
    public void Add(Scout scout)
    {
      scout.Key = Guid.NewGuid().ToString();
      _troop[scout.Key] = scout;
    }
    
    public Scout Find(string key)
    {
      Scout scout;
      _troop.TryGetValue(key, out scout);
      return scout;
    }
    
    public Scout Remove(string key)
    {
      Scout scout;
      _troop.TryGetValue(key, out scout);
      _troop.TryRemove(key, out scout);
      return scout;
    }
    
    public void Update(Scout scout)
    {
      _troop[scout.Key] = scout;
    }
  }
}