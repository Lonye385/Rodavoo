
import React, { useState } from 'react';
import { 
  ArrowLeft, MoreVertical, BadgeCheck, Truck, UserPlus, Mail,
  Heart, Layers, PlayCircle, Grid, Image as ImageIcon, Activity
} from 'lucide-react';

interface SocialProfileProps {
  onBack: () => void;
}

export const SocialProfile: React.FC<SocialProfileProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'fleet' | 'activity'>('photos');

  const galleryItems = [
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxNDAtBnpQl4TMlp38n1WM8VcUmz28heb0eD4UUBzX2kZRxBfmQ8yQvQwzoijSIS3Nwh1fR1cSq2NnzuYJdY6MwURn_NJunLUvouIYJTbDBNfXrn6iOh7qY8XZfy6XZjbB8fUI83SxJVBKE7EzV-teO01QJy44NgaoxfmB9EOQQzQPkfz7i5CtHsABYG6g8GvVyro-7HzFZiNyY2GehOtO_49J43Zd8yO1owRSru_AD4Jx1nl40qr8nOdQPvS30MnQ9A7ckLpbEJA', likes: '1.2k' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9cjTyRZ5I6VoRxbrCyvP_mOewUrpXQZ4SCfJ3fUz10U8GrXl8Jom57ixW9f9vRFcStJFdmUHfbvY1LmS-0K6oPDdtcIDhSG7qGxlWgUnSP_FX00wITmWG4SpR8j_vktGe7aLtkFrcoh1F6HDZ9XdLCmE6hTex5lHs5FPOOp1uWiHRE3EEZh0v5uzNETPQHwWDGoGCBmpPWfHS1LoEK1_69kn8dq1VHS6SfUe_Xu3iu0SrfNzxi_HBvNMTJwAdn-zhkeUziRX-bV4' },
    { type: 'collection', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcxVrgOj87U0LpBOq2YVqGG4Sfzav40-hNvIMOh058kNRRMGt03zTR7ZQXYOchG3Qb0rs3rVgjFREXlEnr1zafpYt1kn6dCm2-fe9RiPzzME3s0_ieI5VcUvHxjvGQ_RkRZJ83dQ52UmXRpsCJ_ugwCUSwtXTmCebYCRg04mFOimtQMBvd5-WcSSjdtGNxLxrK0qhFWzPrfpENTlT-FPmm2V12RmuNV-E3DKcB025k2TkCEoefgJF3nzGIVutoAXqqPIGSDCTBB_w' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMO-ebJH8TK0kicgfeHN4Gh7GOSsmN2F3HOt2Pww_jHiwzD1yt7oZzRDfmOujWYdya-5a0UjeF-oaRbQOuh-BRCk21bFOvq6yZ5hA3OOO4tNlbFAi4o7lM7hFanj2AQPtEKBYACzBP6QIzwViG93LLgbhQvy-WpPQ55MVHqiFuS7bXJOdUrZQggUjIUWOTfAqXiDv06UmO5IUFFgZ2EU8RzwBnzDM2VW4enCstizxmf1PE7kl0_mRXlqI6kjla50pZMzZHPMSGegQ' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCilYTeI1AozU4ZoYRjtc7QAXw7SFwce_R6QlIlln28KWvZzHUi4xLghQ807PuGn3KBVyuOAN7SsnWuqEglfjRXnFJAUaloQDP1Oi0UB2wgrD-L6gRa83uZv9OaTtRJndiRj-oGqcyCqVM56ZK_zxOLdN4QDFOBJwYuDyQxVwflMnunZkgdLSxQ4E5hB-022q7M6mou8lLxjFHGf5KLF6Y9W9akeflS7gxzDJhdlgDyF_QZ3AVrazVGvLE3kiITgXRv5qmJHGmcDMs' },
    { type: 'video', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy0fopGfFMbVI_-jVprmSWgMadMdVH27bzHGLf9-2alG7fOiOnNCYinqXJ3oqhWk7LH6dmKMU23bK4NnxtAtvnxRSKtSjvgix-mho67ShVMsKGIGpo2zSH32Tl2jbAFeZBJQCY2hQbQSakfqSQRFELKgU8wKSGUAuNTiu92e4J-DWg4qpaRDZ8itsqrlnDvF9YFLt97JNwMFCxVO8gKLrwMGSGcY7y53pbo1R4sCpGbUOqzG_8_5Q7keoTyetyGSew88ydwpyRRL4' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSsfljdGf-3LK4rq2VnU5Kl_8SkTqHhFyAhCIpCwGKGLDNXK4DbRvJe8IwUGlI8FXBuvnoc7yONoCIpkUXSBjXtEkU7cGL7PRU9yAi6J1hW0jLcqYgogjs8DyWpeVDA5J4HbJAarME9jXWyUplh9vGEHrTVLAWp5SH3O9ELFYK4KJuJhSGW8rtVBcmECI_UgSYAeO5J243-PICGXr6ihblc_rsesjNjTa5AJlwXioTCGCwykMHMlgTAXdvl_SPX1_iBHT-opnAqtg' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGxs7UcsvtFpuEAG0KHu0guMi_YT2-JQQDTrbqpimZAF1TNmUBm79WkE4KRe2KZqfKpYXNXcYDi8WJaEkzz6DMDItL6ZYRom4-MTcTLSiOeV4RWwGfByG46TY5iGW8FfbLuSQKJJlmeEXPm0FZSgW1WYX_PY0LdtLO9kZufhG2bzVHnHhOxfPagRrsN0NU1-TYD76NqdwQyeVdm4fg3YxEwIdRwc966QDF2D-SlRY9-xCKVY5KFOmjCQZwRagBGt-dAmkdQ0vc0-0' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXbiQJfGvvLtd8n0QRNNhBzo74pLYSV3Ss3OyAmHFQcxvYpHwrR3hG0ebgrUD9dPxKG5cs3b01JFGt0tmJ9uCW9V-jeH025BRV1kJUQy6giH30GH0eGP8Htl_-IdM58JLM-7tJYfXWsKhaQtSgHUN9R6Ef-URnWKzFhZ5rcZr7W-xjwUWkJ-KAtJs5ZW2X_IFpNRz-jdJB9EzG0x3dBVXvpDFawo5vMUa0mOT-XuNShfVyGBnxwf32f_a-4UyOz-ZIl9bHr8sTIwA' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq0dzHkaudI2P_6YH_j6rZNvLXLnj7C4FmciwlMagzv8scWdJTsRmXdKXLpAPct8udZN89RByG5CSNF-HNAsPoo04I8AJSNga5XStuuTk3MgJGCNSpD5HOWlb_9LiyM0CL_nx82oeqn47SmVSNSH-GXdiIl-apMzs8lhigSyHVVpiNJg1Xjy2v6woN9QQMXlvPpsOyDB5EMYe9INMa19pWV451kKupYnev2jQtj9eHNbdikASXVAvNtMueqihEQidkEdrZ8kligOc' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPEh_wML1nTXjNUOEf8pNkk51Y089sO831r-3e4VG-6GcfI-YMQVIqcbn9tGoNOkKQefwr7Gc164BcwRWSzBUmj09mKH7met3K38B9VFpsoVd8OedU0lFeAW7yrs9EMfQCv1gecuogzH04WO5t6s7CrNP9lo5UT2cBFCQPA8xRXlv1UXqATTKz_s6vP6E9BVTuxyVATc7OC64PYYQBkcyrcYtQkR2E0EkcXY9CkskHEcMcixAXYx-kkSrzuT3jpq69PQKu2UYqF4U' },
    { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSbdcgfQhSsgG63maCl0WB9zASU3RMhD3-9Lc2OnMMxhufBuXzZMd8oUO4vkJMwc3FzQdz0AhIlWuw9Nx4dG8ZKhj2u-LfFoZMrT_81PvnRutr14FZhHCag1F7tzFuGxlIpMtLitUWWXFVNLTLYUVcyfQn_RKD-bu7RYkTHbW0K24Gk-i_DfKaE1-cRS3BeuicJPeo8Onj18XBxZ5-L2z11RHynAlLnjjjPHEQM1WY3PudTcqYFNFh1IDpVqt9fD3jq_U7CYWh6oI' },
  ];

  return (
    <div className="bg-[#f6f5f8] dark:bg-[#050505] font-display text-slate-900 dark:text-white antialiased overflow-x-hidden h-full flex flex-col">
      <div className="relative flex-1 w-full flex flex-col max-w-md mx-auto bg-[#f6f5f8] dark:bg-[#050505] shadow-2xl overflow-y-auto no-scrollbar">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 flex items-center bg-[#f6f5f8]/95 dark:bg-[#050505]/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 p-4 justify-between transition-all duration-300">
          <button 
            onClick={onBack}
            className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-wide flex-1 text-center uppercase">Profile</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>

        {/* Profile Hero Section */}
        <div className="flex flex-col p-4 pb-2 w-full items-center">
          {/* Avatar with Neon Glow */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 rounded-full bg-[#330df2] opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div 
              className="relative bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-2 border-white dark:border-[#121212] shadow-xl" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAK2KdDjOexigqcQdOi1hh8jjisdJ-0GF-Qn-U6U8A77tLsg5-Z1IANpatYxPZqhrHhM5PMvRCbkrdQS1MnmhWxX80xAO7AP9NlpV9zJqBCcMD3UnzbzanbNN_2jIex50A2Do1B2s6JIYraGZ_pBKY2bSuCayq_gXDEjcJcqasnuBIWipKjPFVVzL692a6alNLZlANVxyS6HS5oVFzSR-InW53ZpZDa262RUCWN5S3Rf6DOlTZW_UBuOxGwuai0vemC7bUXNJeAfXA")' }}
            >
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#f6f5f8] dark:border-[#050505]" title="Online"></div>
          </div>

          {/* User Info */}
          <div className="flex flex-col items-center justify-center mt-4 gap-1">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold leading-tight tracking-tight">NeonRider99</p>
              <BadgeCheck size={20} className="text-[#330df2] fill-[#330df2]/20" />
            </div>
            <p className="text-slate-500 dark:text-gray-400 text-sm font-mono tracking-wider">@neon_rider_99</p>
            
            {/* Level / Role Badge */}
            <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-white/10">
              <Truck size={16} className="text-[#330df2]" />
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Lvl 45 Logistics Officer</span>
            </div>
            
            <p className="mt-3 text-slate-600 dark:text-gray-400 text-sm font-normal leading-relaxed text-center max-w-[85%]">
              Hauling cargo from Sector 7 to the Outer Rim. Expert in stealth transport. Open for guild invites.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 px-4 py-4 w-full">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/5">
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold">1,240</p>
            <p className="text-slate-500 dark:text-gray-500 text-xs uppercase font-bold tracking-wider mt-1">Deliveries</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/5">
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold">850</p>
            <p className="text-slate-500 dark:text-gray-500 text-xs uppercase font-bold tracking-wider mt-1">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/5">
            <p className="text-slate-900 dark:text-white tracking-tight text-xl font-bold">42</p>
            <p className="text-slate-500 dark:text-gray-500 text-xs uppercase font-bold tracking-wider mt-1">Following</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 px-4 pb-2 w-full">
          <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-lg bg-[#330df2] text-white text-sm font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(51,13,242,0.3)] hover:shadow-[0_0_20px_rgba(51,13,242,0.5)] active:scale-[0.98] transition-all">
            <UserPlus size={20} />
            Follow
          </button>
          <button className="flex-1 h-12 flex items-center justify-center gap-2 rounded-lg bg-transparent border border-gray-300 dark:border-white/20 text-slate-900 dark:text-white text-sm font-bold uppercase tracking-wider hover:bg-white/5 active:scale-[0.98] transition-all">
            <Mail size={20} />
            Message
          </button>
        </div>

        {/* Tabs */}
        <div className="sticky top-[69px] z-40 bg-[#f6f5f8] dark:bg-[#050505] border-b border-gray-200 dark:border-white/10 mt-2">
          <div className="flex px-2">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`flex flex-1 flex-col items-center justify-center py-4 relative group ${activeTab === 'photos' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300'} transition-colors`}
            >
              <span className="text-sm font-bold uppercase tracking-wider mb-1">Photos</span>
              {activeTab === 'photos' && <div className="absolute bottom-0 w-full h-[3px] bg-[#330df2] shadow-[0_-2px_8px_rgba(51,13,242,0.6)] rounded-t-full"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('fleet')}
              className={`flex flex-1 flex-col items-center justify-center py-4 relative group ${activeTab === 'fleet' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300'} transition-colors`}
            >
              <span className="text-sm font-bold uppercase tracking-wider mb-1">Fleet</span>
              {activeTab === 'fleet' && <div className="absolute bottom-0 w-full h-[3px] bg-[#330df2] shadow-[0_-2px_8px_rgba(51,13,242,0.6)] rounded-t-full"></div>}
            </button>
            <button 
              onClick={() => setActiveTab('activity')}
              className={`flex flex-1 flex-col items-center justify-center py-4 relative group ${activeTab === 'activity' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300'} transition-colors`}
            >
              <span className="text-sm font-bold uppercase tracking-wider mb-1">Activity</span>
              {activeTab === 'activity' && <div className="absolute bottom-0 w-full h-[3px] bg-[#330df2] shadow-[0_-2px_8px_rgba(51,13,242,0.6)] rounded-t-full"></div>}
            </button>
          </div>
        </div>

        {/* Photo Grid (Optimized for performance) */}
        <div className="grid grid-cols-3 gap-[2px] pb-20 bg-[#f6f5f8] dark:bg-[#050505]">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative aspect-square group cursor-pointer overflow-hidden bg-[#121212]">
              <img 
                src={item.src} 
                alt={`Gallery item ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {item.likes && (
                <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-[2px] rounded px-1.5 py-0.5 flex items-center gap-1">
                  <Heart size={10} className="text-white fill-white" />
                  <span className="text-[10px] text-white font-bold">{item.likes}</span>
                </div>
              )}
              
              {item.type === 'collection' && (
                <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-[2px] rounded px-1.5 py-0.5 flex items-center gap-1">
                  <Layers size={10} className="text-white" />
                </div>
              )}
              
              {item.type === 'video' && (
                <div className="absolute top-1 right-1 bg-black/60 backdrop-blur-[2px] rounded px-1.5 py-0.5 flex items-center gap-1">
                  <PlayCircle size={10} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
