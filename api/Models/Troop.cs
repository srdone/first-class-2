using System.Collections.Generic;
using api.Models;

namespace api.Models
{
  public class Troop
  {
    public int UnitNumber {get; set;}
    public List<Scout> Scouts {get; set;}
    
  }
}