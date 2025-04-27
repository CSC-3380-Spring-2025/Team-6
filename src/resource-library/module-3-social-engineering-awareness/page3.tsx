import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './resource3-library.css';

interface Comment {
  id: number;
  text: string;
  selection: string;
}

export default function Module3Page() {
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
    <div className="resource-library" onMouseUp={handleMouseUp}>
      {/*Back Button */}
      <button className="px-8 py-4 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 rounded-xl font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/40 flex items-center justify-center gap-2" onClick={() => navigate("/")}>
        ← Back to Modules
      </button>

      <div className="articles">
        <h2>Understanding Social Engineering Tactics: 8 Attacks to Watch Out For</h2>
        <h2>Source: Fortra</h2>
        <p>
        Social engineering is a dangerous weapon many cybercriminals use to achieve their nefarious goals. It leverages psychological manipulation to deceive individuals into divulging confidential or personal information. Unlike traditional hacking, which relies on exploiting software vulnerabilities, social engineering targets human vulnerabilities.
        </p>
        <p>
        Here are the most common types of social engineering attacks in 2024 and real-world examples to highlight their impact.
        </p>
        <p></p>
        <h2>Phishing: Hook, Line, and Sinker</h2>
        <p>
        Phishing is one of the most common social engineering attacks. It involves sending fraudulent communications, usually emails, that appear to come from a legitimate source. The goal is to trick recipients into providing sensitive information, such as login credentials or financial details.
        </p>
        <p>
        Example: In 2022, a sophisticated phishing attack aimed at stealing Office 365 credentials, where attackers impersonated the US Department of Labor (DoL). This scam exemplifies the increasing sophistication and convincing nature of modern phishing attempts.
        </p>
        <p></p>
        <h2>Spear Phishing: Precision Social Engineering</h2>
        <p>
        Spear phishing is a more targeted version of phishing. While phishing attacks are often sent to many recipients with a “mud-against-the-wall” approach, spear phishing targets specific individuals or firms. The malicious actor customizes the message based on information about the target, making it more convincing.
        </p>
        <p>
        Example: As world leaders deliberated on the best response to the escalating tensions between Russia and Ukraine, Microsoft issued a warning in February 2022 about a new spear phishing campaign by a Russian hacking group targeting Ukrainian public sector entities and NGOs.
        The group, known as Gamaredon and tracked by Microsoft as ACTINIUM, had reportedly targeted “organizations critical to emergency response and ensuring the security of Ukrainian territory” since 2021.
        </p>
        <p></p>
        <h2>Pretexting: Mastering the Art of Social Engineering</h2>
        <p>
        Pretexting is another form of social engineering involving creating a fabricated scenario to steal information. These scams use the same social engineering techniques that con artists have used for centuries to manipulate their victims, such as deception, validation, flattery, and intimidation. The attacker pretends to need the information to confirm the victim’s identity or to help with a supposed emergency.
        </p>
        <p>
        At the organizational level, a pretexting actor may take extensive measures to impersonate trusted figures such as managers, coworkers, or customers. This could involve fabricating identities through fraudulent email addresses, websites, or social media profiles.
        </p>
        <p>
        In more elaborate scenarios, the attacker might arrange face-to-face meetings with targets. For instance, a hacker masquerading as a vendor representative might schedule a meeting to gain access to confidential customer data. The attacker aims to appear credible during these encounters and build rapport with the target. By establishing trust, the attacker increases the likelihood that the target will comply with requests for sensitive information, believing them to be legitimate.
        </p>
        <p></p>
        <h2>Deepfakes: Seeing Isn’t Believing</h2>
        <p>
        Deepfakes, which use artificial intelligence (AI) to create realistic but fake audio, video, or images that impersonate real people, are increasingly used in various social engineering attacks to create compelling but fraudulent scenarios. They leverage manipulated audio and video to deceive targets into disclosing sensitive information or performing actions they otherwise would not.
        </p>
        <p>
        Example: In 2019, a deepfake attack targeted a UK-based energy firm. Bad actors used AI-generated audio to impersonate the voice of the parent company's chief executive. They called the target company’s CEO, instructing him to transfer around $243,000 to a Hungarian supplier urgently. The voice was so convincing that the executive complied with the request.
        </p>
        <p></p>
        <h2>Not So Quid Pro Quo</h2>
        <p>
        Another type of social engineering is quid pro quo attacks, which involve offering a service or benefit in exchange for information. Attackers may promise tech support, free software, or other services to persuade victims to reveal confidential information.
        </p>
        <p>
        Examples: One of the most prevalent quid pro quo attacks involves fraudsters posing as representatives of the US Social Security Administration (SSA). These fraudsters contact individuals randomly, requesting confirmation of their Social Security Numbers under false pretenses, enabling identity theft.
        </p>
        <p>
        Alternatively, malicious actors identified by the Federal Trade Commission (FTC) create counterfeit SSA websites to obtain personal information illicitly. Frighteningly, attackers don’t need to be that cunning, as previous incidents have demonstrated that office employees are willing to divulge their passwords in exchange for inexpensive items like pens or chocolate bars.
        </p>
        <p></p>
        <h2>Honeytraps: Love, Lies, and Larceny</h2>
        <p>
        Honeytraps involve creating fake online personas to establish romantic relationships with victims. The goal is to gain and exploit the victim’s trust for financial gain or access to sensitive information.
        </p>
        <p>
        Example: According to police reports, a man from Vancouver Island lost $150,000 in a romance scam. Over several months, the scammer requested money for plane tickets, medical bills, and various other expenses.
        </p>
        <p></p>
        <h2>Piggybacking: Hitching a Ride</h2>
        <p>
        Two other widespread threats are tailgating and piggybacking. Tailgating, in essence, is unauthorized access to secured spaces, which malefactors gain by exploiting the trust of real users. It involves gaining physical access to a restricted area by following someone with legitimate access and exploiting the courtesy of others to gain entry without proper authorization. It can also involve badge cloning, using unattended devices, or impersonation. Piggybacking happens when someone attempts to piggyback onto a hacker's attempted extortion.
        </p>
        <p>
        Example: In 2018, an individual admitted guilt in England's Reading Crown Court for unauthorized computer access and blackmail while working at Oxford Biomedica, a gene therapy company. There was an incident where the company faced a ransom demand of $370,000 in Bitcoin after an attack.
        An employee (ironically part of the response team) altered ransom notes to redirect payments to his cryptocurrency wallet, effectively launching a separate attack against his employer.
        </p>
        <p></p>
        <h2>Business Email Compromise: The Impersonation Game</h2>
        <p>
        Business email compromise (BEC) is a sophisticated cyberattack where criminals meticulously gather information about an organization's structure and key executives. Using this knowledge, they exploit the trust associated with high-ranking positions, like the CFO, to manipulate employees into transferring funds or divulging sensitive information.
        </p>
        <p>
        By gaining access to an executive's email account, attackers impersonate them to request urgent financial transactions, such as paying fraudulent invoices. They exploit the time-sensitive nature of these transactions to minimize the chances of detection.
        BEC is one of the most common attacks and one of the most costly types of cybercrime. Between 2013 and 2022, the FBI says BEC attacks caused roughly $50.8 billion in losses worldwide.
        </p>
        <p></p>
        <h2>Fighting the Exploitation</h2>
        <p>
        Social engineering attacks are a growing scourge in today's digital landscape. They exploit human psychology rather than technological weaknesses, making them particularly challenging to defend against. Awareness and education are crucial in combating these attacks.
        </p>
        <p>
        Companies should integrate the following recommendations into their security awareness training:
        Exercise caution with emails from unfamiliar sources. If you receive a suspicious email, verify its legitimacy by contacting the sender directly via phone or in person.
        Be skeptical of unsolicited offers. If something appears too good to be true, it likely is.
        Always lock your laptop when stepping away from your workstation to prevent unauthorized access.  
        Invest in antivirus software. While no antivirus solution offers foolproof protection, it can significantly bolster defenses against social engineering tactics.
        Familiarize yourself with your company’s privacy policy to understand protocols regarding access permissions for external individuals.
        Validate urgent requests from internal contacts before taking action, primarily involving financial transactions or sensitive information.
        Foster a culture of risk awareness to keep employees vigilant. Social engineering thrives on human error, so embedding security awareness into the organizational mindset is crucial. Employees should know how to recognize and report potential incidents promptly.
        </p>
        <p>
        By understanding the common types of social engineering attacks and recognizing their real-world implications, individuals and organizations can better protect themselves from these pervasive threats.
        </p>
      </div>

      {showCommentBox && (
        <div className="comment-box">
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add your comment..."
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      )}

      <div className="comments-sidebar">
        <h3>Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <span className="highlighted-text">"{comment.selection}"</span>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}