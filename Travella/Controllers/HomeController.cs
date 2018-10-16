using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Travella.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View("ComingSoon");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
