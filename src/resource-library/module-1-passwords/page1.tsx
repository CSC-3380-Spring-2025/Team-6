import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './resource1-library.css';

interface Comment {
  id: number;
  text: string;
  selection: string;
}

export default function Module1Page() {
  const navigate = useNavigate();

  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedText, setSelectedText] = useState("");
  const [selectionRange, setSelectionRange] = useState<Range | null>(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection?.toString();
    const range = selection?.rangeCount ? selection.getRangeAt(0) : null;

    if (text && text.trim().length > 0 && range) {
      setSelectedText(text);
      setSelectionRange(range.cloneRange());
      setShowCommentBox(true);
    }
  };

  const handleAddComment = () => {
    if (!commentInput.trim() || !selectionRange) return;

    const span = document.createElement("span");
    span.className = "highlighted-text";
    span.textContent = selectedText;

    selectionRange.deleteContents();
    selectionRange.insertNode(span);
    window.getSelection()?.removeAllRanges();

    const newComment: Comment = {
      id: Date.now(),
      text: commentInput,
      selection: selectedText,
    };
    setComments((prev) => [...prev, newComment]);

    setCommentInput("");
    setSelectedText("");
    setSelectionRange(null);
    setShowCommentBox(false);
  };

  return (
    <div className="relative flex flex-col h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Grid/Dot Patterning */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>

          {/* Gradient Animation, Color Transitions */}
          <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-[40%] -left-[20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-500/30 via-orange-500/20 to-amber-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 resource-library" onMouseUp={handleMouseUp}>
        {/* Back Button */}
        <button
          className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
          onClick={() => navigate("/")}
        >
          ← Back to Modules
        </button>

        <div className="articles">
          <h2>What Is A Brute Force Attack?</h2>
          <h2>Source: Fortinet </h2>
          <p>
            A brute force attack is a hacking method that uses trial and error
            to crack passwords, login credentials, and encryption keys. It is a
            simple yet reliable tactic for gaining unauthorized access to
            individual accounts and organizations’ systems and networks. The
            hacker tries multiple usernames and passwords, often using a
            computer to test a wide range of combinations, until they find the
            correct login information.
          </p>
          <h2></h2>
          <p>
          The name "brute force" comes from attackers using excessively forceful attempts to gain access to user accounts. Despite being an old cyberattack method, brute force attacks are tried and tested and remain a popular tactic with hackers.      
          </p>
          <h2></h2>
          <h2>Types Of Brute Force Attacks</h2>
          <p>
          There are various types of brute force attack methods that allow attackers to gain unauthorized access and steal user data.
          </p>
          <h2></h2>
          <h2>Simple brute force attacks</h2>
          <p>
          A simple brute force attack occurs when a hacker attempts to guess a user’s login credentials manually without using any software. This is typically through standard password combinations or personal identification number (PIN) codes. 
          </p>
          <p>
          These attacks are simple because many people still use weak passwords, such as "password123" or "1234," or practice poor password etiquette, such as using the same password for multiple websites. Passwords can also be guessed by hackers that do minimal reconnaissance work to crack an individual's potential password, such as the name of their favorite sports team.
          </p>
          <h2>Dictionary attacks</h2>
          <p>
          A dictionary attack is a basic form of brute force hacking in which the attacker selects a target, then tests possible passwords against that individual’s username. The attack method itself is not technically considered a brute force attack, but it can play an important role in a bad actor’s password-cracking process. 
          </p>
          <p>
          The name "dictionary attack" comes from hackers running through dictionaries and amending words with special characters and numbers. This type of attack is typically time-consuming and has a low chance of success compared to newer, more effective attack methods.
          </p>
          <h2>Hybrid brute force attacks</h2>
          <p>
          A hybrid brute force attack is when a hacker combines a dictionary attack method with a simple brute force attack. It begins with the hacker knowing a username, then carrying out a dictionary attack and simple brute force methods to discover an account login combination.
          </p>
          <p>
          The attacker starts with a list of potential words, then experiments with character, letter, and number combinations to find the correct password. This approach allows hackers to discover passwords that combine common or popular words with numbers, years, or random characters, such as "SanDiego123" or "Rover2020."
          </p>
          <h2>Reverse brute force attacks</h2>
          <p>
          A reverse brute force attack sees an attacker begin the process with a known password, which is typically discovered through a network breach. They use that password to search for a matching login credential using lists of millions of usernames. Attackers may also use a commonly used weak password, such as "Password123," to search through a database of usernames for a match.
          </p>
          <h2></h2>
          <h2>
            Credential Stuffing
          </h2>
          <p>
          Credential stuffing preys on users’ weak password etiquettes. Attackers collect username and password combinations they have stolen, which they then test on other websites to see if they can gain access to additional user accounts. This approach is successful if people use the same username and password combination or reuse passwords for various accounts and social media profiles.
          </p>
          <h2></h2>
          <h2></h2>
          <h2>
          Motives Behind Brute Force Attacks
          </h2>
          <p>
          Brute force hacking requires plenty of patience because it may take months or even years for an attacker to successfully crack a password or encryption key. However, the potential rewards are huge.
          </p>
          <h2></h2>
          <h2>
          Exploit ads or activity data
          </h2>
          <p>
          A hacker may launch a brute force attack on a website or multiple websites to earn financial profit from advertising commission. Common methods include: 
          Placing spam ads on popular websites, which enables the attacker to earn money every time an ad gets clicked or viewed by a visitor.
          Rerouting traffic to a legitimate website to illegal commissioned ad sites.
          Infecting a website and site visitors with malware, such as spyware, that tracks activity. The data collected is then sold to advertisers without the user’s consent.
          </p>
          <h2></h2>
          <h2>Steal personal data</h2>
          <h2></h2>
          <p>
          Hacking into a user’s personal accounts can provide a treasure trove of data, from financial details and bank accounts to confidential medical information. Access to an account enables an attacker to spoof a person’s identity, steal their money, sell their credentials to third parties, or use the information to launch wider attacks. 
          </p>
          <p>
          Personal data and login credentials can also be stolen through corporate data breaches that see attackers gain access to organizations’ sensitive databases.
          </p>
          <h2></h2>
          <h2>
          Spread malware
          </h2>
          <p>
          Brute force attacks are often not personal. A hacker may simply want to create havoc and showcase their malicious skills. They may do this by spreading malware via email or Short Message Service (SMS) messages, concealing malware within a spoofed website designed to look like a legitimate site, or redirecting website visitors to malicious sites. 
          </p>
          <p>
          By infecting a user’s computer with malware, the attacker can then work their way into connected systems and networks and launch wider cyberattacks against organizations.
          </p>
          <h2></h2>
          <h2>
          Hijack systems for malicious activity
          </h2>
          <p>
          Brute force attacks can play a role in malicious actors launching broader attacks using multiple devices, called a botnet. This is typically a distributed denial-of-service (DDoS) attack that aims to overpower the target’s security defenses and systems.
          </p>
          <h2></h2>
          <h2>
          Ruin a company or website’s reputation
          </h2>
          <p>
          Brute force attacks are often launched in an attempt to steal data from an organization, which not only costs them financially but also causes huge reputational damage. Websites can also be targeted with attacks that infest them with obscene or offensive text and images, thereby denigrating their reputation, which could lead to them being taken down.
          </p>
          <h2></h2>
          <h2>Brute Force Attack Tools</h2>
          <h2></h2>
          <p>
          Guessing a user’s email or social media website password can be a time-consuming process, especially if the accounts have strong passwords. To simplify the process, hackers have developed software and tools to help them crack passwords.
          </p>
          <p>
          Brute force attack tools include password-cracking applications, which crack username and password combinations that would be extremely difficult for a person to crack on their own. Commonly used brute force attack tools include:
          </p>
          <p>
          1. Aircrack-ng: A suite of tools that assess Wi-Fi network security to monitor and export data and attack an organization through methods like fake access points and packet injection.
          </p>
          <p>
          2. John the Ripper: An open-source password recovery tool that supports hundreds of cipher and hash types, including user passwords for macOS, Unix, and Windows, database servers, web applications, network traffic, encrypted private keys, and document files.
          </p>
          <p>
          These types of software can rapidly guess combinations that identify weak passwords and crack multiple computer protocols, wireless modems, and encrypted storage devices.
          </p>
          <p>
          A brute force attack can also demand huge amounts of computing power. To combat that, hackers have developed hardware solutions that simplify the process, such as combining a device’s central processing unit (CPU) and graphics processing unit (GPU). Adding the computing core of the GPU enables a system to process several tasks simultaneously and the hackers to crack passwords significantly faster.
          </p>
          <h2></h2>
          <h2>
          How To Prevent Brute Force Attacks
          </h2>
          <p>
          Individuals and organizations can employ several tactics to protect themselves against known vulnerabilities like Remote Desktop Protocol (RDP). Cryptanalysis, the study of ciphers and cryptography, can also help organizations strengthen their security defenses and safeguard their confidential information from brute force attacks.
          </p>
          <h2></h2>
          <p>
          Use stronger password practices
          </p>
          <h2></h2>
          <p>
          The best way to defend against brute force attacks that target passwords is to make passwords as tough as possible to crack. End-users have a key role to play in protecting their and their organization's data by using stronger passwords and following strict password best practices. This will make it more difficult and time-consuming for attackers to guess their passwords, which could lead to them giving up. 
          </p>
          <p>
          Stronger password best practices include:
          </p>
          <p>
          1. Create strong, multicharacter passwords: A basic rule of thumb is that passwords should be more than 10 characters in length and include capital and lowercase letters, symbols, and numerals. This vastly increases the difficulty and time it takes to crack a password from a few hours to several years, unless a hacker has a supercomputer at hand.
          </p>
          <p>
          2. Use elaborate passphrases: While using more characters is good password practice, some websites may have restrictions on the length of a password. As such, use complex passphrases to prevent attackers from succeeding with simple dictionary attacks. Passphrases are multiple words or segments with special characters that make them more difficult to guess.
          </p>
          <p>
          3. Create password-building rules: Another good password tactic is to truncate words so they appear nonsensical to other people reading them. This can be done by removing vowels or only using the first two letters of words then building a phrase that makes sense out of a string of shortened words. For example, shortening the word "hope" to "hp" or "blue" to "bl." 
          </p>
          <p>
          4. Avoid common passwords: Frequently used passwords, such as a name, sports team, or simply "password," are extremely risky. Hackers know common words or phrases that people use in their passwords and deploy tactics based around these common words to hack into people's accounts.
          </p>
          <p>
          5. Use unique passwords for every account: Credential stuffing sees hackers test passwords that have been used on websites to check if they are being used elsewhere. Unfortunately, this proves highly successful as people frequently reuse their passwords for email accounts, social media profiles, and news websites. It is important never to use the same password for any two websites or accounts.
          </p>
          <p> 
          6. Use password managers: A password manager makes it easier for people to create safe, unique passwords for all the websites they sign in to. It automatically creates and tracks users’ logins to multiple websites, enabling the user to access all their accounts by simply logging in to the password manager. With a password manager, users can create long and complex passwords, securely store them, and not run the risk of forgetting, losing, or having passwords stolen.
          </p>
          <h2></h2>
          <p>
          Better protect user passwords
          </p>
          <h2></h2>
          <p>
          There is little point in users following strong password best practices if their organization is not capable of protecting their data from brute force attacks. The onus is also on the organization to safeguard its users and bolster network security through tactics such as: 
          </p>
          <p>
          1. Use high encryption rates: Encrypting system passwords with the highest available encryption rates, such as 256-bit, limits the chances of a brute force attack succeeding and makes passwords harder to crack.
          </p>
          <p>
          2. Salt the hash: Salting the hash is a cryptography tactic that enables system administrators to strengthen their password hashes. They add a salt—random letters and numbers stored in a separate database—to a password to strengthen and protect it.
          </p>
          <p>
          3. Use multi-factor authentication (MFA): When you add authentication to a user login, you take the dependence away from passwords. With MFA, after a user logs in with their password, they will be prompted to provide additional proof that they are who they say they are, such as a code sent via SMS or on their device or a fingerprint scan. This can prevent a hacker from gaining access to a user’s account or business system even if they have the user’s login credentials.
          </p>
          <p>
          4. Limit login attempts: Limiting the number of times a user is able to re-enter their password credentials reduces the success rate of brute force attacks. Preventing another login attempt after two or three failed logins can deter a potential attacker, while locking down an account completely after numerous failed login attempts stops the hacker from repeatedly testing username and password combinations.
          </p>
          <p>
          5. Use CAPTCHA to support logins: Adding a CAPTCHA box to the login process can prevent an attacker from using computers to brute force their way into a user account or business network. CAPTCHA options include typing text images that appear on the screen, checking multiple image boxes, and identifying objects that appear. 
          </p>
          <p>
          6. Use an Internet Protocol (IP) blacklist: Deploying a blacklist of IPs used in attacks helps protect a business network and its users from known attackers. It is important to keep this blacklist up to date to prevent new attacks.
          </p>
          <p> 
          7. Remove unused accounts: Unused or unmaintained accounts offer an open door for cyber criminals to launch an attack against an organization. Businesses must ensure they regularly remove unused accounts or, ideally, remove accounts as soon as employees leave the organization to prevent them from being used in a brute force attack. This is especially important for employees with high-level permission status or access rights to sensitive corporate information.
          </p>
          <h2></h2>
          <p>
          Provide ongoing security and password support
          </p>
          <h2></h2>
          <p>
          In addition to user awareness and solid IT security, businesses must ensure that systems and software are always kept up to date and provide ongoing support to employees. 
          </p>
          <p>
          1. Provide password education: It is important for users to understand what good security and password usage best practices look like and to recognize the telltale signs of cyberattacks. They also need regular education and updates to keep them aware of the latest threats and reinforce good practices. Corporate password manager tools or vaults also enable users to save complex passwords and eliminate the risk of losing their passwords, which could put corporate data at risk.
          </p>
          <p>
          2. Monitor networks in real time: Brute force attacks can be spotted through telltale activity such as multiple login attempts and logins from new devices or unusual locations. Businesses must constantly monitor their systems and networks for suspicious or unusual behavior and block potentially malicious activity immediately.
          </p>
          <p></p>
          <p>
          What Is An Encryption Key?
          </p>
          <p></p>
          <p>
          Encryption is a cybersecurity tactic that scrambles data so it appears as a string of random characters. The correct encryption key will unscramble the data. 
          </p>
          <p></p>
          <p> 
          A 128-bit encryption key would require two to the power of 128 combinations to crack, which is impossible for most powerful computers. Most websites and web browsers use it. 256-bit encryption makes data protection even stronger, to the point that even a powerful computer that can check trillions of combinations every second would never crack it. This makes 256-bit encryption completely immune to brute force attacks.
          </p>
        </div>

        {showCommentBox && (
          <div className="comment-box">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add your comment..."
            />
            <button
              className="mb-4 px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2"
              onClick={handleAddComment}
            >
              Add Comment
            </button>
          </div>
        )}

        <div className="comments-sidebar">
          <h3>Comments</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <span className="highlighted-text">"{comment.selection}"</span>
              <p>{comment.text}</p>
              <button
                className="ml-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-xl font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/40 flex items-center justify-center gap-2"
                onClick={() => {
                  // Remove the highlight from the article
                  const highlightedElements = document.querySelectorAll(".highlighted-text");
                  highlightedElements.forEach((element) => {
                    if (element.textContent === comment.selection) {
                      const parent = element.parentNode;
                      if (parent) {
                        // Replace the span with its text content
                        parent.replaceChild(document.createTextNode(element.textContent || ""), element);
                      }
                    }
                  });

                  // Remove the comment from the state
                  setComments((prev) => prev.filter((c) => c.id !== comment.id));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

