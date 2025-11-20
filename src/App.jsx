import './App.css'

function HeaderTopbar() {
  return (
    <div className="hidden lg:flex items-center justify-between border-b border-gray-200 text-[13px] text-[#7E7E7E] h-9 px-4 xl:px-10">
      <div className="flex gap-4">
        <a href="#" className="hover:text-[#253D4E]">About Us</a>
        <span className="w-px h-2.5 bg-[#DEDFE2] self-center" />
        <a href="#" className="hover:text-[#253D4E]">My Account</a>
        <span className="w-px h-2.5 bg-[#DEDFE2] self-center" />
        <a href="#" className="hover:text-[#253D4E]">Wishlist</a>
        <span className="w-px h-2.5 bg-[#DEDFE2] self-center" />
        <a href="#" className="hover:text-[#253D4E]">Order Tracking</a>
      </div>
      <div className="flex items-center gap-4">
        <span>Need help? Call Us:+ 1800 900</span>
        <div className="flex items-center gap-1">
          <a href="#">English</a>
        </div>
        <span className="w-px h-2.5 bg-[#DEDFE2]" />
        <div className="flex items-center gap-1">
          <a href="#">USD</a>
        </div>
      </div>
    </div>
  )
}

function HeaderMain() {
  return (
    <div className="px-4 xl:px-10 py-3 flex items-center justify-between gap-6">
      {/* Logo placeholder */}
      <div className="w-[180px] h-[55px] bg-white" aria-label="logo" />

      {/* Search */}
      <div className="hidden md:flex items-stretch max-w-[700px] flex-1 border-2 border-[#BCE3C9] rounded-md overflow-hidden">
        <div className="hidden sm:flex items-center px-3 bg-white text-[#253D4E] font-semibold">All Categories</div>
        <input className="flex-1 h-12 px-4 outline-none" placeholder="Search for items..." />
        <button className="px-4 text-[#7E7E7E]">🔍</button>
      </div>

      {/* Quick actions */}
      <div className="hidden md:flex items-center gap-6 text-[#7E7E7E]">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3BB77E] text-white text-[12px]">3</span>
          <span className="text-[16px] text-[#253D4E]">Compare</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3BB77E] text-white text-[12px]">6</span>
          <span className="text-[16px] text-[#253D4E]">Wishlist</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3BB77E] text-white text-[12px]">2</span>
          <span className="text-[16px] text-[#253D4E]">Cart</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[#253D4E]">Account</span>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <div className="border-y border-gray-200 px-4 xl:px-10 h-[73px] flex items-center justify-between">
      <button className="hidden md:flex flex-col justify-center px-6 h-11 rounded bg-[#3BB77E] text-white text-left">
        <span className="font-display font-bold leading-none">Browse</span>
        <span className="text-xs">All Categories</span>
      </button>
      <nav className="hidden lg:flex items-center gap-6 font-display font-bold text-[16px]">
        <a className="text-[#3BB77E]" href="#">Home</a>
        <a className="text-[#253D4E]" href="#">About</a>
        <a className="text-[#253D4E]" href="#">Shop</a>
        <a className="text-[#253D4E]" href="#">Vendors</a>
        <a className="text-[#253D4E]" href="#">Mega menu</a>
        <a className="text-[#253D4E]" href="#">Blog</a>
        <a className="text-[#253D4E]" href="#">Pages</a>
        <a className="text-[#253D4E]" href="#">Contact</a>
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <div className="w-9 h-9" />
        <div className="text-[#3BB77E] font-display font-bold text-[26px] leading-none">1900 - 888</div>
        <div className="text-[#7E7E7E] text-[12px] tracking-[0.075em]">24/7 Support Center</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="px-4 xl:px-10 py-8">
      <div className="hero-pattern rounded-[30px] p-8 md:p-12 min-h-[300px]">
        <h1 className="font-display font-bold text-[40px] md:text-[72px] leading-[1] text-[#253D4E] max-w-[600px]">
          Fresh Vegetables
          <br />
          Big discount
        </h1>
        <p className="text-[20px] md:text-[30px] text-[#7E7E7E] mt-6">Save up to 50% off on your first order</p>
        <div className="bg-white rounded-full mt-8 w-full max-w-[450px] h-16 flex overflow-hidden">
          <input className="flex-1 px-6 outline-none" placeholder="Your email address" />
          <button className="btn btn-primary btn-sm rounded-full m-2 font-display">Subscribe</button>
        </div>
      </div>
    </section>
  )
}

function FeaturedCategories() {
  const chips = [
    { label: 'Cake & Milk' },
    { label: 'Coffes & Teas' },
    { label: 'Pet Foods', active: true },
    { label: 'Vegetables' },
  ]
  const cardColors = ['#F2FCE4','#FFFCEB','#ECFFEC','#FEEFEA','#FFF3EB','#FFF3FF','#F2FCE4','#FEEFEA','#FFFCEB','#FEEFEA']
  return (
    <section className="px-4 xl:px-10 pt-6 pb-2">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Featured Categories</h3>
        <div className="hidden md:flex items-center gap-4 text-[16px] font-display">
          {chips.map(ch => (
            <button key={ch.label} className={ch.active ? 'text-[#3BB77E] font-bold' : 'text-[#253D4E] font-semibold'}>{ch.label}</button>
          ))}
        </div>
      </div>
      <div className="mt-6 relative">
        <div className="grid grid-flow-col auto-cols-[minmax(137px,1fr)] gap-4 overflow-x-auto pb-2">
          {cardColors.map((bg, idx) => (
            <div key={idx} className="rounded-[10px] border border-[#F4F6FA] h-[180px]" style={{ backgroundColor: bg }} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PromoBanners() {
  return (
    <section className="px-4 xl:px-10 grid md:grid-cols-3 gap-6">
      {["banner-1","banner-2","banner-3"].map((b) => (
        <div key={b} className={`rounded-[10px] h-[300px] bg-no-repeat bg-cover bg-center ${b}`}>
          <div className="p-6">
            <h3 className="font-display font-bold text-[24px] text-[#253D4E] max-w-[220px]">
              {b === 'banner-1' && <>Everyday Fresh &<br/>Clean with Our<br/>Products</>}
              {b === 'banner-2' && <>Make your Breakfast<br/>Healthy and Easy</>}
              {b === 'banner-3' && <>The best Organic<br/>Products Online</>}
            </h3>
            <button className="btn btn-primary btn-sm font-display gap-2 mt-6">
              Shop Now <span>→</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}

function PopularProducts() {
  const tabs = ['All','Milks & Dairies','Coffes & Teas','Pet Foods','Meats','Vegetables','Fruits']
  const images = [
    '/images/thumbnail-1.jpg','/images/thumbnail-2.jpg','/images/thumbnail-3.jpg','/images/thumbnail-4.jpg',
    '/images/thumbnail-5.jpg','/images/thumbnail-6.jpg','/images/thumbnail-7.jpg','/images/thumbnail-8.jpg'
  ]
  return (
    <section className="px-4 xl:px-10 py-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Popular Products</h3>
        <div className="flex flex-wrap gap-4 text-[16px] font-display">
          {tabs.map((t, idx) => (
            <button key={t} className={idx===0 ? 'text-[#3BB77E] font-semibold' : 'text-[#253D4E]'}>{t}</button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-[15px] border border-[#ECECEC] p-4">
            <img className="aspect-[4/3] w-full object-cover rounded bg-gray-50" src={images[i % images.length]} alt="Product" />
            <div className="mt-4 text-[#ADADAD] text-xs">Snack</div>
            <h5 className="font-display font-bold text-[16px] text-[#253D4E] leading-tight mt-1">Sample food product title</h5>
            <div className="flex items-center gap-2 text-[#B6B6B6] text-sm mt-2">(4.0) • By NestFood</div>
            <div className="flex items-end gap-2 mt-3">
              <div className="text-[#3BB77E] font-display font-bold text-[18px]">$28.85</div>
              <div className="text-[#ADADAD] line-through text-sm">$32.8</div>
            </div>
            <button className="mt-3 w-full h-9 rounded bg-[#DEF9EC] text-[#253D4E] font-semibold">Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function DailyBest() {
  return (
    <section className="px-4 xl:px-10 py-12">
      <div className="flex items-end justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Daily Best Sells</h3>
        <div className="hidden md:flex gap-4 font-semibold text-[#253D4E]"><button className="text-[#3BB77E]">Featured</button><button>Popular</button><button>New added</button></div>
      </div>
      <div className="mt-6 grid lg:grid-cols-[380px_1fr] gap-6">
        <div className="rounded-[15px] bg-no-repeat bg-cover bg-center daily-best-banner h-[520px] p-6 flex flex-col justify-between">
          <h4 className="font-display font-bold text-[40px] leading-[1.2] text-[#253D4E] max-w-[242px]">Bring nature into your home</h4>
          <button className="btn btn-primary btn-sm w-fit font-display">Shop Now</button>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-[15px] border border-[#ECECEC] p-4">
              <img className="aspect-[4/3] w-full object-cover rounded bg-gray-50" src={`/images/thumbnail-${(i % 4) + 1}.jpg`} alt="Product" />
              <div className="mt-4 text-[#ADADAD] text-xs">Snack</div>
              <h5 className="font-display font-bold text-[16px] text-[#253D4E] leading-tight mt-1">Sample food product title</h5>
              <div className="flex items-center gap-2 text-[#B6B6B6] text-sm mt-2">(4.0) • By NestFood</div>
              <div className="flex items-end gap-2 mt-3">
                <div className="text-[#3BB77E] font-display font-bold text-[18px]">$28.85</div>
                <div className="text-[#ADADAD] line-through text-sm">$32.8</div>
              </div>
              <button className="mt-3 w-full h-9 rounded bg-[#DEF9EC] text-[#253D4E] font-semibold">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DealsOfTheDay() {
  return (
    <section className="px-4 xl:px-10 py-12">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Deals Of The Day</h3>
        <a className="text-[#7E7E7E]" href="#">All Deals →</a>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Deals Of The Day</h3>
        <a className="text-[#7E7E7E]" href="#">All Deals →</a>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Deals Of The Day</h3>
        <a className="text-[#7E7E7E]" href="#">All Deals →</a>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Deals Of The Day</h3>
        <a className="text-[#7E7E7E]" href="#">All Deals →</a>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-display font-bold text-[32px] text-[#253D4E]">Deals Of The Day</h3>
        <a className="text-[#7E7E7E]" href="#">All Deals →</a>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-[15px] border border-[#ECECEC] overflow-hidden">
            <img className="aspect-[4/3] w-full object-cover" src={`/images/thumbnail-${(i % 4) + 9}.jpg`} alt="Deal product" />
            <div className="p-4">
              <h5 className="font-display font-bold text-[16px] text-[#253D4E] leading-tight">Sample deal product</h5>
              <div className="flex items-end gap-2 mt-3">
                <div className="text-[#3BB77E] font-display font-bold text-[18px]">$23.85</div>
                <div className="text-[#ADADAD] line-through text-sm">$25.8</div>
              </div>
              <button className="mt-3 w-full h-9 rounded bg-[#DEF9EC] text-[#253D4E] font-semibold">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FooterSite() {
  return (
    <footer className="px-4 xl:px-10 pt-10 border-t border-[#BCE3C9]">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        <div>
          <div className="w-[215px] h-[66px] bg-white" aria-label="logo" />
          <p className="mt-4 text-[#253D4E]">Awesome grocery store website template</p>
          <p className="mt-4 text-[#253D4E]">Awesome demo store website template</p>
          <p className="mt-4 text-[#253D4E]">Awesome grocery store website template</p>
          
          <p className="mt-4 text-[#253D4E]">Awesome grocery store website template</p>

          <div className="mt-4 space-y-2 text-[15px]">
            <div className="font-semibold text-[#253D4E]">Address: <span className="font-normal">5171 W Campbell Ave</span></div>
            <div className="text-[#253D4E]">Kent, Utah 53127 United States</div>
            <div className="font-semibold text-[#253D4E]">Call Us: <span className="font-normal">(+91) - 540-025-124553</span></div>
            <div className="font-semibold text-[#253D4E]">Email: <span className="font-normal">sale@Nest.com</span></div>
            <div className="font-semibold text-[#253D4E]">Hours: <span className="font-normal">10:00 - 18:00, Mon - Sat</span></div>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-[18px] text-[#253D4E]">Company</h4>
          <ul className="mt-4 space-y-2 text-[#253D4E]">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[18px] text-[#253D4E]">Account</h4>
          <ul className="mt-4 space-y-2 text-[#253D4E]">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare products</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[18px] text-[#253D4E]">Corporate</h4>
          <ul className="mt-4 space-y-2 text-[#253D4E]">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[18px] text-[#253D4E]">Popular</h4>
          <ul className="mt-4 space-y-2 text-[#253D4E]">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-[18px] text-[#253D4E]">Install App</h4>
          <p className="mt-2 text-[#253D4E]">From App Store or Google Play</p>
          <div className="mt-3 flex gap-3">
            <img className="h-10" src="/images/app-store.jpg" alt="App Store" />
            <img className="h-10" src="/images/google-play.jpg" alt="Google Play" />
          </div>
          <p className="mt-6 text-[#253D4E]">Secured Payment Gateways</p>
          <img className="mt-2 h-8" src="/images/payment-method.png" alt="Payments" />
        </div>
      </div>
      <div className="mt-8 border-t border-[#BCE3C9] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#7E7E7E] text-sm">© 2022, Nest - HTML Ecommerce Template · All rights reserved</div>
        <div className="flex items-center gap-3">
          <span className="text-[#253D4E] font-display font-bold">Follow Us</span>
          {['F','T','I','P','Y'].map((c) => (
            <span key={c} className="w-8 h-8 rounded-full bg-[#3BB77E] text-white grid place-items-center">{c}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

function FooterCta() {
  return (
    <section className="px-4 xl:px-10 py-12">
      <div className="footer-cta-bg bg-cover bg-no-repeat rounded-[20px] min-h-[320px] flex flex-col md:flex-row items-center justify-between px-8">
        <div className="py-10">
          <h3 className="font-display font-bold text-[40px] leading-[1.2] text-[#253D4E]">Stay home & get your daily
          <br/>needs from our shop</h3>
          <p className="text-[18px] text-[#7E7E7E] mt-3">Start You'r Daily Shopping with Nest Mart</p>
          <div className="bg-white rounded-full mt-6 w-full max-w-[450px] h-16 flex overflow-hidden">
            <input className="flex-1 px-6 outline-none" placeholder="Your email address" />
            <button className="btn btn-primary btn-sm rounded-full m-2 font-display">Subscribe</button>
          </div>
        </div>
        <div className="w-full md:w-[640px] h-[260px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/banner-9.png')" }} />
      </div>
    </section>
  )
}

function App() {

  return (
    <>
      <HeaderTopbar />
      <HeaderMain />
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <PopularProducts />
      <DailyBest />
      <DealsOfTheDay />
      <FooterCta />
      <FooterSite />
    </>
  )
}

export default App
