using System.Collections.Generic;

namespace api.Models
{
  public interface ITroopRepository
  {
    void Add(Scout scout);
    IEnumerable<Scout> GetAll();
    Scout Find(string key);
    Scout Remove(string key);
    void Update(Scout scout);
  }
}