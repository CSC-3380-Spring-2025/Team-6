import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import the hook
import './resource-library.css';

interface Comment {
  id: number;
  text: string;
  selection: string;
}

export default function Module2Page() {
  const navigate = useNavigate(); // ✅ Create a navigation function

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
      {/* ✅ Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Modules
      </button>

      <div className="articles">
        <h2>What is physical security and how does it work?</h2>
        <p>
        Physical security protects personnel, hardware, software, networks, facilities and data from physical actions and events that could cause serious loss or damage to an enterprise, agency or institution. This includes protection from fire, flood, natural disasters, burglary, theft, vandalism and terrorism. While most of these events are covered by insurance, physical security's prioritization of damage prevention avoids the time, money and resources lost because of these events.
        </p>
        <h2></h2>
        <p>
        Physical security is fundamental to an organization's success. It safeguards valuable assets and sensitive information by limiting facility access and monitoring activities. It ensures the confidentiality, integrity and availability of all types of data and information and also ensures the safety and protection of employees and others who work on premises. With the right security measures in place, an organization can ensure a safe and secure workplace.      
        </p>
        <h2></h2>
        <h2>What is a physical security framework?</h2>
        <p>
        A physical security framework outlines the policies, procedures and technologies used to protect an area from unauthorized access, intrusion or damage. Core elements of a physical security framework typically include the following:
        </p>
        <h2></h2>
        <h2>1. Deterrence</h2>
        <p>
        Deterrence means creating a visible security presence that makes an intruder think twice about trying to breach physical security. Companies deter criminals from attempting physical security breaches and unauthorized access by surrounding corporate campuses and remote buildings with visible physical security systems, such as tall perimeter fences, gates and security signage.
        </p>
        <h2>2. Detection</h2>
        <p>
        Surveillance is one of the most important physical security components for prevention and post-incident recovery. In this case, it refers to the technology, personnel and resources that organizations use to detect intrusion and monitor the activity of different real-world locations and facilities. Examples include patrol guards, heat sensors, motion detectors, cameras and other notification systems.
        </p>
        <p>
        Closed-circuit television (CCTV) cameras are a common type of physical security control that records activity in certain areas. These video surveillance cameras are as valuable in capturing criminal behavior as they are in defending it. Threat actors who see a CCTV camera are less inclined to break in or vandalize a building out of fear of having their identity recorded. Similarly, if a particular asset or piece of equipment is stolen, surveillance cameras can provide visual evidence to identify the culprit and their tactics.
        </p>
        <h2>3. Delay</h2>
        <p>
        Using tactically placed obstacles, organizations can make it more difficult for attackers to access valuable assets and information. Similarly, these barriers increase the time it takes for threat actors to successfully carry out acts of thievery, vandalism or terrorism. The more obstacles in place, the more time organizations have to respond to and contain threats and potential threats to physical security.
        </p>
        <p>
        Safes, vaults, walls and fences can help slow down physical intruders. Walls and fences can also harden buildings against environmental disasters, such as earthquakes, mudslides and floods. Organizations that divert resources toward such hardening measures should balance the cost and benefit of their implementation before investment.
        </p>
        <h2>4. Defend</h2>
        <p>
        Protecting physical assets begins by limiting and controlling what people can access -- whether a site, data center or other facility. Access control encompasses the measures taken to give only authorized personnel access to certain physical assets. These corporate barriers often include ID badges, keypads and security guards. However, these obstacles can vary significantly by method, approach and cost.
        </p>
        <p>
        More sophisticated access controls involve a technology-supported approach. Security teams can use physical authentication methods, such as security ID card scanners and near-field communication ID cards, to verify the identities of individuals entering and exiting various facilities.
        </p>
        <h2></h2>
        <h2>
          Why is physical security important?
        </h2>
        <p>
        As businesses become more dependent on the internet of things (IoT) and edge computing, the need for digital and physical security grows. With IoT and edge computing providing industrial automation in manufacturing plants, remote offices and the field, a company's responsibility for physical security has expanded.
        </p>
        <p>
        IoT sensors and devices, as well as new technologies like drones, the data they collect and the servers that store that data as well as where these technologies are deployed, must all be protected. For companies outsourcing their systems and applications to the cloud, agreements must be in place with all cloud vendors. They should require cloud vendors to maintain optimum physical security at their data centers and for the networks, physical storage and servers they use. Third-party cloud provider data centers require physical security to avoid data losses and uptime failures. Client companies should request reports of cloud data center physical security audits regularly.
        </p>
        <h2></h2>
        <h2>Types of physical security threats</h2>
        <h2></h2>
        <h2>
          Human oversight
        </h2>
        <p>
        Employees can forget to lock doors or sign off systems, leaving these assets open to intruders. In remote sites, such as manufacturing plants, it isn't uncommon for employees to forget to return critical equipment, such as robots or servers, to securely locked cages after a shift ends.
        </p>
        <h2></h2>
        <h2>
        Equipment failures
        </h2>
        <p>
        Security sensors in the field can malfunction. For example, a sensor might fail in temperatures below zero, or a visual sensor won't work in snow. Also, door and vault locks or high-security fencing can fail. When these types of surveillance mechanisms malfunction, they create vulnerabilities in physical security that a perpetrator could penetrate.
        </p>
        <h2></h2>
        <h2>
        Natural and man-made disasters
        </h2>
        <p>
        Disasters such as floods, earthquakes, hurricanes, chemical spills and fires can all affect the operations of equipment and facilities and compromise physical security. In these circumstances, companies need to take immediate steps to protect employees and minimize further damage to equipment and infrastructure.
        </p>
        <h2></h2>
        <h2>
        Developing a Physical Security Plan
        </h2>
        <p>
        Before a physical security plan is developed, it's important to assess all corporate physical assets for level of risk and refine the scope of the plan by addressing the following questions:
        </p>
        <p>
        Is surveillance installed at every mission-critical point throughout the enterprise and its satellite facilities?
        </p>
        <p>
        Are data centers and IT equipment in remote areas secured from unauthorized access?
        </p>
        <p>
        Are all physical security monitoring and check-in technologies such as badge scans, in-field sensors, cameras and vault locks in perfect working order?
        </p>
        <p>
        Are employees properly trained in physical security practices for their work areas? Are there written procedures for extenuating circumstances like storms or fires that would cause a loss of physical security?
        </p>
        <p>
        Are physical security guidelines and procedures documented in the corporate disaster recovery and business continuity plan, and are employees regularly refreshed on this plan and how it works? Are physical security systems regularly tested?
        </p>
        <p>
        Are the organization's physical assets insured for loss?
        </p>
        <h2></h2>
        <h2>
        Physical Security Best Practices
        </h2>
        <p>
        Use log and trail maintenance security. Keeping a record of what is accessed and by whom is a reliable way to discourage unauthorized users and create a forensic-friendly data environment. Organizations can monitor and record multiple failed login attempts and attempted access to gather crucial evidence to pinpoint security weaknesses.
        </p>
        <p>
        Adopt an approach based on risk management. This data analysis technique evaluates scenarios based on a person's risk profile. If a business is particularly risk-averse -- such as a credit union or a restaurant -- it might opt to invest in a more expensive physical security system that's more equipped to mitigate risk. Therefore, the amount of resources a company dedicates to its physical security using a risk-based approach should be equivalent to the value it places on risk mitigation.
        </p>
        <p>
        Tie access control to individuals. An organization can improve its visibility over personnel activity by tying access control to individuals. Imagine a particular room can only be accessed by a single key that's given to only two people. If an asset in that room goes missing, only those two people are accountable for its disappearance.
        </p>
        <p>
        Perform regular security testing. Regular security testing is increasingly important. Fire drills are necessary for schools and buildings because they help to coordinate large groups and their methods of response. These tests should be conducted regularly so participants know exactly what to do in a physical emergency. Physical security deterrent equipment such as sensors, door locks, security cameras, badge and scanning systems should also be regularly tested.
        </p>
        <p>
        Train employees. Employees should be regularly trained on the physical security measures they should take in their work areas. This reduces the likelihood of human error or omission.
        </p>
        <p>
        Maintain an updated plan. Each year, companies acquire new physical assets and retire old ones. A company might open a new warehouse or acquire a server for a remote location. Regardless of the situation, the company's physical assets are always changing, so the plan for securing them must change, too.
        </p>
        <p>
        Determine who is in charge of physical security. In many companies, physical security, even in data centers, is maintained by a separate maintenance or facilities department. In other cases, IT might be in charge of the data center, and a facilities group might handle other physical assets. Early on, it's essential to know who is in charge of what.
        </p>
        <p>
        Don't forget about the cloud. Most companies discuss physical security with their cloud vendors during the service evaluation and sign-up period. However, after that, there's often a tendency to assume that the vendor is maintaining proper physical security of the organization's assets. A better course of action is to review the vendor's security audits annually so the organization knows that physical and other security has been addressed and maintained.
        </p>
        <p>
        Use AI with physical security. The capabilities of physical security are changing. This transformation is largely being driven by the addition of artificial intelligence (AI) to physical security technology. Examples include advanced video surveillance systems, smart access control systems and biometric readers. AI motion sensors and cameras do more than monitor and report on motion. They also observe employee movements and determine if anything is irregular.
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

