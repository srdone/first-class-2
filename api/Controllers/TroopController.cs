using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using api.Models;

namespace api.Controllers
{
    [RouteAttribute("api/[controller]")]
    public class TroopController : Controller
    {
        [FromServices]
        public ITroopRepository Troop {get; set;}
        
        [HttpGet]
        public IEnumerable<Scout> Get()
        {
          return Troop.GetAll();
        }
        
        [HttpGet("{id}", Name = "GetScout")]
        public IActionResult GetById(string id)
        {
          var scout = Troop.Find(id);
          if (scout == null)
          {
            return HttpNotFound();
          }
          return new ObjectResult(scout);
        }
        
        [HttpPost]
        public IActionResult Post([FromBody]Scout scout)
        {
          if (scout == null) return HttpBadRequest();
          Troop.Add(scout);
          return CreatedAtRoute("GetScout", new { controller = "Troop", id = scout.Key}, scout);
        }
        
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody]Scout updatedScout)
        {
          if (updatedScout == null || updatedScout.Key != id)
          {
            return HttpBadRequest();
          }
          
          var scout = Troop.Find(id);
          if (scout == null)
          {
            return HttpNotFound();
          }
          
          Troop.Update(updatedScout);
          return new NoContentResult();
        }
        
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
          Troop.Remove(id);
        }
    } 
}