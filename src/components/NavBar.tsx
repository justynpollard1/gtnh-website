import { useState } from "preact/hooks";
import "../styles/global.css";
import discordIcon from "../assets/icons/discord-icon.svg?url";
import downloadIcon from "../assets/icons/download-icon.svg?url";
import githubIcon from "../assets/icons/github-icon.svg?url";
import hamburgerIcon from "../assets/icons/hamburger-icon.svg?url";
import xIcon from "../assets/icons/x-icon.svg?url";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="flex justify-center h-14 border-b border-b-[#2E3338] px-6">
        <div className="flex justify-between items-center w-full max-w-[1440px]">
          <a href="/" className="flex items-center gap-x-4">
            <img src="/gtnh-simple.svg" />
            <h1 className="text-white font-mono">New Horizons</h1>
          </a>
          <div className="flex gap-x-6 max-md:hidden">
            <a href="downloads" className="flex gap-x-1.5 items-center">
              <img src={downloadIcon} className="w-4 h-3" />
              <span className="text-[#B3B3B3] text-xs">Downloads</span>
            </a>
            <a href="mod-list" className="text-[#B3B3B3] text-xs">
              Mod List
            </a>
            <a href="server" className="text-[#B3B3B3] text-xs">
              Server
            </a>
            <a href="team" className="text-[#B3B3B3] text-xs">
              Team
            </a>
            <a href="faq" className="text-[#B3B3B3] text-xs">
              FAQ
            </a>
            <a href="#" className="text-[#B3B3B3] text-xs">
              Wiki
            </a>
            <a
              href="https://github.com/GTNewHorizons"
              className="flex gap-x-1.5 items-center"
            >
              <img src={githubIcon} className="size-3" />
              <span className="text-[#B3B3B3] text-xs">Github</span>
            </a>
            <a
              href="https://discord.com/invite/EXshrPV"
              className="flex gap-x-1.5 items-center"
            >
              <img src={discordIcon} className="w-4 h-3" />
              <span className="text-[#B3B3B3] text-xs">Discord</span>
            </a>
          </div>
          <button className="flex md:hidden" onClick={() => setOpen(!open)}>
            {!open ? (
              <img src={hamburgerIcon} className="w-4 h-2" />
            ) : (
              <img src={xIcon} className="size-3" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div class="absolute md:hidden top-14 left-0 w-full h-[calc(100vh-3.5rem)] flex">
          <div className="grid grid-cols-2 px-4 gap-y-8 self-center w-full">
            <div className="space-y-2">
              <h2 className="text-[#F2F2F2]">Downloads</h2>
              <a href="#" className="block text-[#999999]">
                Technic
              </a>
              <a href="#" className="block text-[#999999]">
                CurseForge
              </a>
              <a href="#" className="block text-[#999999]">
                MMC/Prism
              </a>
              <a href="#" className="block text-[#999999]">
                Client ZIPs
              </a>
              <a href="#" className="block text-[#999999]">
                Server ZIPs
              </a>
            </div>
            <div className="space-y-2">
              <h2 className="text-[#F2F2F2]">About</h2>
              <a href="#" className="block text-[#999999]">
                Team
              </a>
              <a href="#" className="block text-[#999999]">
                FAQ
              </a>
              <a href="#" className="block text-[#999999]">
                Wiki
              </a>
              <a href="#" className="block text-[#999999]">
                Changelog
              </a>
            </div>
            <div className="space-y-2">
              <h2 className="text-[#F2F2F2]">Resources</h2>
              <a href="mod-list" className="block text-[#999999]">
                Mod List
              </a>
              <a href="server" className="block text-[#999999]">
                Server List
              </a>
              <a href="#" className="block text-[#999999]">
                Documentation
              </a>
            </div>
            <div className="space-y-2">
              <h2 className="text-[#F2F2F2]">Community</h2>
              <a href="#" className="block text-[#999999]">
                Discord Server
              </a>
              <a href="#" className="block text-[#999999]">
                GitHub
              </a>
              <a href="#" className="block text-[#999999]">
                Bug Reports
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
