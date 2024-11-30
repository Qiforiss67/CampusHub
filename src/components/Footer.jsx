import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-[#003266] w-full transition all"id="footer">
      <div className="container">
        <div className="content-box mx-20">
          <div className="footer-box flex gap-56 mx-auto">
            <div className="about-us">
              <div className="logo mt-24 pb-8 ">
                <Link to="">
                  <img src="src/assets/CampusHub.svg" alt="Logo" />
                </Link>
              </div>
              <div className="address text-white text-medium text-[14px] mb-20">
                  <p>Gedung Rektorat Lantai 2</p>
                  <p>Jl. Veteran No.10-11, Ketawanggede</p>
                  <p>Kec. Lowokwaru, Kota Malang, Jawa Timur, 65145</p>
              </div>
              <div className="contact">
                  <span className="text-white text-bold text-[16px] py-4 block">Subscribe Email</span>
                  <p className="text-white text-[14px] text-medium">Get the best new products in your inbox, every day.</p>
                  <p className="text-white text-[14px] text-medium">Get the latest content first</p>
                  <div className="social-media flex gap-4 my-8">
                    <a href="#"><img src="src/assets/Facebook.svg" alt="Facebook" className="text-4xl"/></a>
                    <a href="#"><img src="src/assets/Instagram.svg" alt="Instagram" className="text-4xl"/></a>
                    <a href="#"><img src="src/assets/Linkedin.svg" alt="Linkedin" className="text-4xl"/></a>
                    <a href="#"><img src="src/assets/Tiktok.svg" alt="Tiktok" className="text-4xl"/></a>
                    <a href="#"><img src="src/assets/X.svg" alt="X" className="text-4xl"/></a>
                  </div>
              </div>
            </div>
            <div className="kategori mt-32">
              <span className="text-white mb-6 block text-bold text-[18px]">Kategori</span>
              <ul className="text-white space-y-6 text-[18px] text-medium">
                <li> <Link to="">Seminar</Link></li>
                <li><Link to="">Webinar</Link></li>
                <li><Link to="">Kuliah Tamu</Link></li>
                <li><Link to="">Workshop</Link></li>
                <li><Link to="">Sertifikasi</Link></li>
              </ul>
            </div>
            <div className="halaman mt-32">
              <span className="text-white mb-6 block text-bold text-[18px]">Halaman</span>
              <ul className="text-white space-y-6 text-[18px] text-medium">
                <li><Link to="">Home</Link></li>
                <li><Link to="">Kategori</Link></li>
                <li><Link to="">MyEvent</Link></li>
                <li><Link to="">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-b-2 border-white w-full"></div>
          <div className="copyright-box flex gap-4 justify-center py-8">
            <i className="ri-copyright-line text-white text-2xl"></i>
            <div className="copyright text-white text-[16px] text-medium mt-1">Copyright 2024. CampusHub. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer