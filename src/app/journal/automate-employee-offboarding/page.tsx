import ArticleLayout, { buildArticleMetadata } from "@/components/journal/ArticleLayout";
import OutboundLink from "@/components/analytics/OutboundLink";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getArticle } from "@/content/journal";

const SLUG = "automate-employee-offboarding";
const article = getArticle(SLUG);
const repo = "https://github.com/Beyond-Automation/OffboardPilot";

export const metadata = buildArticleMetadata(SLUG);

function DocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <ArticleLayout slug={SLUG}>
      <p className="ba-article-lead">
        Employee offboarding sounds simple enough until you&rsquo;re responsible for making sure every account,
        mailbox, license, session, and group membership has been handled correctly.
      </p>
      <p>Now throw a hybrid Microsoft environment into the mix.</p>
      <p>
        You&rsquo;re working across Active Directory, Microsoft Entra ID, Exchange Online, and Microsoft 365. Each
        platform has its own administrative requirements, and completing an operation in one system doesn&rsquo;t
        necessarily mean your work is finished in another.
      </p>
      <p>
        After more than 20 years in IT, I&rsquo;ve learned that some of the most frustrating infrastructure problems
        aren&rsquo;t the complicated ones. They&rsquo;re the repetitive ones that we&rsquo;ve accepted as part of our
        everyday operations. Employee offboarding is a perfect example.
      </p>

      <h2 id="disabling-ad-is-not-enough">Disabling an Active Directory account isn&rsquo;t enough</h2>
      <p>
        Disabling an Active Directory account is an important step, but a hybrid offboarding workflow needs to account
        for the broader Microsoft environment. Depending on the organization&rsquo;s requirements, an employee
        offboarding checklist may include:
      </p>
      <ul>
        <li>Disabling the on-premises Active Directory account.</li>
        <li>Blocking Microsoft Entra ID sign-in.</li>
        <li>Revoking cloud sessions and refresh tokens.</li>
        <li>Preserving mailbox data when required.</li>
        <li>Configuring authorized email forwarding.</li>
        <li>Removing unnecessary Microsoft 365 licenses.</li>
        <li>Removing applicable cloud and on-premises group memberships.</li>
        <li>Documenting the results for verification and auditing.</li>
      </ul>
      <p>
        Most experienced administrators already know how to perform these operations. Microsoft even publishes its own{" "}
        <DocLink href="https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee">
          step-by-step guidance for removing a former employee
        </DocLink>
        .
      </p>
      <p>
        The challenge is ensuring they&rsquo;re performed consistently, in the appropriate order, and with enough
        visibility to confirm the intended results. That&rsquo;s where automation becomes valuable.
      </p>

      <h2 id="introducing-offboardpilot">Introducing OffboardPilot</h2>
      <p>
        <a href="/products/offboardpilot">OffboardPilot</a> is an open-source PowerShell solution developed by Beyond
        Automation to coordinate employee offboarding across hybrid Microsoft environments. It&rsquo;s published under
        the MIT License, and the full source is on{" "}
        <OutboundLink href={repo} destination="github" placement="article_intro">
          GitHub
        </OutboundLink>
        .
      </p>
      <p>The workflow is organized into six stages:</p>
      <ol>
        <li>
          <strong>Active Directory account disablement.</strong> The on-premises account is disabled using explicitly
          supplied admin credentials, so a least-privilege technician account can run the script.
        </li>
        <li>
          <strong>Microsoft Entra ID sign-in blocking.</strong> The cloud account is disabled through Microsoft Graph.
        </li>
        <li>
          <strong>Microsoft 365 session revocation.</strong> Active sessions and refresh tokens are revoked with{" "}
          <DocLink href="https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.users.actions/revoke-mgusersigninsession">
            Revoke-MgUserSignInSession
          </DocLink>
          .
        </li>
        <li>
          <strong>Mailbox and license management.</strong> The mailbox is converted to a shared mailbox, optional
          forwarding (and optional Full Access for the forwarding recipient) is applied, and assigned licenses are
          removed.
        </li>
        <li>
          <strong>Exchange Online group membership cleanup.</strong> Cloud-only distribution group memberships are
          removed.
        </li>
        <li>
          <strong>Active Directory group membership cleanup.</strong> On-premises group memberships are removed,
          including AD-synced distribution lists.
        </li>
      </ol>
      <p>
        Before anything changes, the script runs pre-flight checks: it confirms the AD account, the Entra ID account,
        and whether an Exchange Online mailbox exists. Users with no mailbox are handled too. The Exchange steps are
        marked as skipped and the AD and identity steps continue normally.
      </p>
      <p>
        At the end of execution, OffboardPilot generates a reconciliation report and a session transcript to help
        engineers review completed actions and identify anything requiring further attention. The goal is to make
        offboarding repeatable while maintaining appropriate operational control.
      </p>

      <h2 id="demo">Watch the engineering demonstration</h2>
      <p>
        Our first Beyond Automation YouTube episode demonstrates OffboardPilot inside an operational hybrid
        infrastructure lab. You&rsquo;ll see the initialization, authentication, configuration, execution, and
        reconciliation stages of the workflow.
      </p>
      <p>This is actual lab execution, not simulated command output.</p>

      {article.video && (
        <YouTubeEmbed videoId={article.video.youtubeId} title={article.video.title} placement="article_demo" />
      )}

      <h2 id="exchange-online-identity">The Exchange Online problem that can be easy to miss</h2>
      <p>
        One of the more interesting challenges in developing offboarding automation involves how Exchange Online
        identifies recipients during mailbox and licensing changes.
      </p>
      <p>
        When a workflow depends exclusively on a mutable email address or recipient property, changes made earlier in
        the process can affect later lookups. In OffboardPilot&rsquo;s case, the concern is ordering: licenses are
        removed in step 4, and cloud group cleanup happens in step 5. After a license is removed, Exchange Online may
        revert the user&rsquo;s primary SMTP address to the tenant&rsquo;s <code>onmicrosoft.com</code> address. A
        group query that filters on the original email address can then come back empty.
      </p>
      <p>
        An empty result isn&rsquo;t an error. The script continues, reports that no memberships were found, and the
        user quietly remains a member of the distribution lists you meant to clean up.
      </p>
      <p>
        OffboardPilot avoids that dependency. During pre-flight, before any mailbox or licensing change, it reads the
        mailbox with{" "}
        <DocLink href="https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/get-mailbox">
          Get-Mailbox
        </DocLink>{" "}
        and stores the mailbox&rsquo;s <code>DistinguishedName</code>. The distinguished name identifies the
        recipient object itself and doesn&rsquo;t change when licensing is modified. Step 5 then uses that stored value
        to find group memberships:
      </p>
      <pre className="ba-article-code" aria-label="PowerShell example">
        <code>{`# Pre-flight: capture a stable identifier before anything is changed
$EXOMailbox = Get-Mailbox -Identity $UserEmail -ErrorAction Stop
$EXOUserDN  = $EXOMailbox.DistinguishedName

# ... Step 4 converts the mailbox and removes licenses ...

# Step 5: find cloud distribution group memberships by DN, not email address
$EXOGroups = Get-DistributionGroup -Filter "Members -eq '$EXOUserDN'"`}</code>
      </pre>
      <p>
        This is an excerpt from the released{" "}
        <OutboundLink href={`${repo}/blob/main/Invoke-UserOffboard.ps1`} destination="github" placement="article_code">
          Invoke-UserOffboard.ps1
        </OutboundLink>
        , simplified for readability. If you want to see the effect in your own lab, the repository includes{" "}
        <code>Get-EXOGroupMembership.ps1</code> so you can record a user&rsquo;s cloud group memberships before and
        after a run.
      </p>
      <p>
        Microsoft&rsquo;s reference for{" "}
        <DocLink href="https://learn.microsoft.com/en-us/powershell/exchange/filter-properties">
          filterable properties on the -Filter parameter
        </DocLink>{" "}
        and the{" "}
        <DocLink href="https://learn.microsoft.com/en-us/powershell/module/exchangepowershell/get-distributiongroup">
          Get-DistributionGroup
        </DocLink>{" "}
        documentation are worth reading if you&rsquo;re building this kind of query yourself.
      </p>
      <p>
        This is why understanding the relationships between systems matters more than simply combining PowerShell
        commands. The order of operations creates dependencies, and the automation has to account for them.
      </p>

      <h2 id="verifiable-automation">Automation should be verifiable</h2>
      <p>
        A script finishing successfully does not automatically mean every intended operation was successful.
        Infrastructure automation should provide enough information for engineers to understand what happened, what
        was skipped, and what requires additional attention.
      </p>
      <p>
        That&rsquo;s why reconciliation reporting is an important part of OffboardPilot. Every step reports one of
        three outcomes: completed, skipped (by design or by technician choice) or partially completed, and failed. The
        session transcript is written to disk so you have a record of exactly what ran.
      </p>
      <p>
        Before deploying any offboarding automation in production, validate it against your organization&rsquo;s
        retention requirements, licensing policies, administrative permissions, identity synchronization, and security
        procedures.
      </p>
      <p>
        Shared mailbox conversion and license removal must account for mailbox size, archive functionality, retention,
        and other applicable licensing requirements. Microsoft documents the{" "}
        <DocLink href="https://learn.microsoft.com/en-us/microsoft-365/admin/email/convert-user-mailbox-to-shared-mailbox">
          requirements for converting a user mailbox to a shared mailbox
        </DocLink>
        . OffboardPilot checks mailbox size before conversion. If the mailbox is 50 GB or larger, it stops and asks
        whether to convert anyway, apply forwarding only and keep the license, or skip the mailbox step for manual
        handling.
      </p>

      <h2 id="open-source">Why we&rsquo;re embracing open source</h2>
      <p>Beyond Automation is moving toward a more collaborative approach to infrastructure engineering.</p>
      <p>
        We want other engineers to inspect our work, understand the implementation, challenge our decisions, and adapt
        these solutions to their own environments. The best ideas don&rsquo;t always come from the person who
        originally wrote the code.
      </p>
      <p>
        That&rsquo;s one of the reasons we&rsquo;re making our engineering projects available through GitHub. The
        OffboardPilot README includes a lab guide that uses fictional users and a test domain, so you can contribute
        without touching production. If a test path behaves differently than documented,{" "}
        <OutboundLink href={`${repo}/issues`} destination="github" placement="article_contribute">
          open an issue
        </OutboundLink>
        . The{" "}
        <OutboundLink href={`${repo}/blob/main/CONTRIBUTING.md`} destination="github" placement="article_contribute">
          contribution guide
        </OutboundLink>{" "}
        explains how.
      </p>

      <h2 id="what-are-you-still-doing-manually">What are you still doing manually?</h2>
      <p>
        Employee offboarding is just one of many operational processes that can benefit from thoughtful automation.
        Look around your own infrastructure.
      </p>
      <p>What are you repeatedly doing today that could become a better engineering solution tomorrow?</p>
      <p>
        That&rsquo;s the conversation Beyond Automation wants to encourage. Explore OffboardPilot, watch our
        demonstrations, contribute your ideas, and help us build better solutions for the engineering community.
      </p>
      <p className="ba-article-signoff">Beyond Automation — Engineering Smarter IT Operations.</p>
    </ArticleLayout>
  );
}
