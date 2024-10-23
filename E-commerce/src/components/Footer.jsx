const Footer = () => {
    return (
        <>
            <footer className="bg-[#0f3460] py-10 text-white w-full mt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
                    <div className="box">
                        <h1 className="mb-8 text-[#e94560] font-extrabold italic">Bonik</h1>
                        <p className="text-sm font-light opacity-50">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <div className="bg-[#0c2a4d] p-3 rounded-lg flex items-center space-x-2">
                                <i className="fa-brands fa-google-play text-lg"></i>
                                <span className="text-sm">Google Play</span>
                            </div>
                            <div className="bg-[#0c2a4d] p-3 rounded-lg flex items-center space-x-2">
                                <i className="fa-brands fa-app-store-ios text-lg"></i>
                                <span className="text-sm">App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h2 className="text-lg font-semibold mb-5">About Us</h2>
                        <ul className="space-y-2 opacity-50">
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2 className="text-lg font-semibold mb-5">Customer Care</h2>
                        <ul className="space-y-2 opacity-50">
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>

                    <div className="box">
                        <h2 className="text-lg font-semibold mb-5">Contact Us</h2>
                        <ul className="space-y-2 opacity-50">
                            <li>70 Washington Square South, New York, NY 10012, United States</li>
                            <li>Email: uilib.help@gmail.com</li>
                            <li>Phone: +1 1123 456 780</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
