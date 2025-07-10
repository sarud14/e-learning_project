import { FacebookIcon, IgIcon, LinkedinIcon, YoutubeIcon} from "../icons";

function Footer() {
  return (
    <div className="bg-info w-full h-96 mt-10 flex justify-center items-center">
      <div className="w-480 h-80 flex flex-col">
        <div className="flex mt-8 justify-evenly">
          <div className="flex flex-col">
            <div className="text-primary w-[150px] h-9">
              <a
                href="/"
                className="h-full w-full flex items-center justify-center"
              >
                <img
                  src="/assets/images/Logo.png"
                  alt="web-logo"
                  className="h-full w-auto object-contain"
                />
              </a>
            </div>
            <p className="mt-6 ml-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex gap-4 ml-6 mt-3 mb-3 text-primary">
              <input
                type="email"
                className="input bg-white"
                placeholder="enter your E-mail"
              />
              <button className="btn btn-primary text-info">Subscribe</button>
            </div>
            <p className="ml-6">
              By subscribing you agree to with our&nbsp;
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
              &nbsp; and provide <br />
              consent to receive updates from our company.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-primary font-bold">CONTACT</li>
              <li>
                <a href="/">Inside .DEV</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Job</a>
              </li>
              <li>
                <a href="/">Media Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-primary font-bold">LEARN KEY TECH</li>
              <li>
                <a href="/">Java Script</a>
              </li>
              <li>
                <a href="/">SQL</a>
              </li>
              <li>
                <a href="/">GIT</a>
              </li>
              <li>
                <a href="/">Docker</a>
              </li>
              <li>
                <a href="/">AWS</a>
              </li>
              <li>
                <a href="/">Technologies News</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-primary font-bold">FOLLOW US</li>
              <li className="flex gap-2 items-center">
                <FacebookIcon className="w-7"/>
                <a href="/">Facebook</a>
              </li>
              <li className="flex gap-2 items-center">
                <IgIcon className="w-7" />
                <a href="/">instagram</a>
              </li>
              <li className="flex gap-2 items-center">
                <LinkedinIcon  className="w-7"/>
                <a href="/">LinkedIn</a>
              </li>
              <li className="flex gap-2 items-center">
                <YoutubeIcon className="w-7"/>
                <a href="/">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider divider-neutral"></div>
        <div className="flex justify-between text-primary">
          <p>© 2025 .DEV All rights reserved</p>
          <div className="flex gap-6">
            <a href="/">
              <p>Privacy Policy</p>
            </a>
            <a href="/">
              <p>Terms of Service</p>
            </a>
            <a href="/">
              <p>Cookies Settings</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
