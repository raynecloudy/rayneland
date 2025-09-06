<script lang="ts">
  import DropdownClose from "../DropdownClose.svelte";
  import { pronouns } from "$lib";

  let tldrDropdown: HTMLElement;
</script>

<svelte:head>
  <title>queer identity</title>
  <meta name="og:description" content="if you know me personally, you probably know my pronouns and gender identity change a LOT. this page is to help you understand my gender">
  <meta name="og:title" content="rayne cloudy's queer identity">
  <meta name="og:type" content="website">
  <meta name="og:url" content="https://raynec.dev/gender">
</svelte:head>

<h1>rayne cloudy's queer identity</h1>
<p><sub>last updated 6th of september, 2025</sub></p>
<div>
  <button onclick={() => {
    tldrDropdown.classList.toggle("show");
  }}>click for TL;DR</button>
  <dropdown bind:this={tldrDropdown}>
    <p>my pronouns are <strong>{pronouns}</strong>.</p>
    <p>i am:</p>
    <ul>
      <li>unlabeled</li>
      <li>leaning feminine</li>
      <li>pansexual</li>
      <li>panromantic</li>
    </ul>
    <DropdownClose />
  </dropdown>
</div>
<h2>gender</h2>
<p>if you know me personally, you probably know my pronouns and gender identity change a LOT. i'm so sorry, i can only imagine the pain of trying to keep up TwT here's the gender path i've been on:</p>
<p>on the 18th of january, 2024, at around 11 PM, my egg cracked. i had just taken a gender identity test to see what i align with the most. the results were shocking, to say the least.</p>
<img src="/egg_test.png" alt="test results">
<p>according to this online test, i was 33% cisgender and <strong>86% transgender</strong>. initially, i wasn't sure how to react. i ended up identifying as non-binary soon after this revelation. i was male-leaning at this point in terms of gender expression.</p>
<p>june is pride month. on the 1st of june, 2024, i came across transfeminine individuals online and related to a lot of what they were talking about. i was so sure i was transfem, and because of my impulsive nature, i came out as transfem online within 24 hours. my <a href="https://gamejolt.com/p/it-s-official-i-go-by-she-her-now-6gwermmq">coming out post</a> got 831 likes in just a few hours on a relatively niche platform. my phone was buzzing all day with notifications about it :sob:</p>
<img src="/pronouns.jpg" alt="a social media post saying &quot;it's official, i go by she/her now&quot;">
<p>on my 15th birthday at 11:47 PM, i came out as transfeminine to my family. i was shaking uncontrollably and crying because i was so scared of what they would think. i feel extremely grateful because they accepted me. i preferred the name "hayden" at this time and they began using it around the house. i filled out a form from the school to have my name changed in the system, but building up to the first day, i had extreme panic attacks and stress and worry and would often lie in bed crying. something was wrong.</p>
<p>on the first day of school, people asked me why my name was listed as "hayden." this made my anxiety even worse and i told all my peers and teachers that my name was actually [deadname] and that there was an issue with the system. once i had the chance, before i went home, i reverted the change in the system.</p>
<p>i became "hayley" shortly after this. then "reese" (which, honestly, i'm still quite fond of....), and then "rayne." during the period of name changing, i stopped identifying as transfem, and instead as non-binary again. i've been rayne for quite a while now and i truly think this name is sticking.</p>
<p>my gender has since been bouncing around (f.e. i was bigender for a while) and i've officially given up trying to fit it into a neat little box.</p>
<p>before the 2025-2026 school year, i changed my name in the system to "rayne." my teachers call me rayne, my friends are starting to call me rayne, and my immediate family will soon. so, where do we stand with my gender today?</p>
<pages>
  <div>
    <p>right now, i identify as <strong>unlabeled</strong>. this means i don't feel any personal attraction towards a specific label (such as <i>transfeminine</i> or <i>demiboy</i>).</p>
  </div>
  <div>
    <p>as for gender <i>expression,</i> i identify as <strong>leaning feminine</strong>. i align myself to present feminine traits, like walking more femininely, wearing "girly" clothes, et cetera.</p>
  </div>
</pages>
<img src="/lgbtq/unlabeled.svg" alt="unlabeled flag">
<!-- <p><img src="/geneder_idnentely.png" alt="keeping up with rayne's gender identity"></p> -->
<p><img src="/forgot_gender.png" alt="rayne cloudy forgets her gender"></p>
<h2>sexuality</h2>
<p>my sexuality doesn't have nearly as long a story. in fact, it doesn't really have a story at all so i'll just state the facts here. i'm pan!! sort of!!!! close enough ig!!!!?</p>
<p>being pansexual means feeling attraction to all people regardless of their gender.</p>
<img src="/lgbtq/pansexual.svg" alt="pansexual flag">
<p>well, at least, that's the label i'm currently using. i'm still kind of figuring it out. i feel more sexual and romantic attraction towards females than males, but i don't leave boys out of the equation entirely. it's complicated</p>
<p>for more information check <a href="https://spectrum.avris.it/slMG">this</a> out</p>
<h2>pronouns and more</h2>
<p>don't worry; i don't expect you to memorize all this. that would be unreasonable. just remember my name and pronouns and you'll be fine ^v^</p>
<style>
  .preferred {
    color: #ff85e4;
    list-style: "❤ ";
    font-weight: 700;
  }

  .reserved {
    color: #ff8578;
    list-style: "✕ ";
  }

  .no {
    color: #858585;
    list-style: "↓  ";
  }
</style>
<sub>
  <span class="preferred">❤ favorite</span><br>
  <span class="ok">• okay</span><br>
  <span class="reserved">✕ reserved—only some people are able to use this. this is highly context-dependent.</span><br>
  <span class="no">↓ do not use</span>
</sub>
<pages>
  <div>
    <h3>names</h3>
    <ul>
      <li class="preferred">rayne</li>
      <li class="ok">reese</li>
      <li class="reserved" title="people like my friends (for now), old teachers, and my coach get a free pass">[deadname]</li>
      <li class="no">hayden</li>
      <li class="no">hayley</li>
    </ul>
    <h3>honorifics</h3>
    <ul>
      <li class="preferred">no honorific</li>
      <li class="preferred">ms.</li>
      <li class="preferred">mx.</li>
      <li class="ok">frau</li>
      <li class="no">mr.</li>
      <li class="no">mrs.</li>
      <li class="no">sir</li>
    </ul>
    <h3>relationship descriptions</h3>
    <sub>the reason not all of these are marked as reserved is because, for example, everybody is allowed to say "X's girlfriend is rayne" but only i would want my partner to say "rayne is my beloved"</sub>
    <ul>
      <li class="preferred" title="a constant one, even?">companion</li>
      <li class="preferred">enbyfriend</li>
      <li class="preferred">girlfriend</li>
      <li class="preferred">kissmate</li>
      <li class="preferred">love</li>
      <li class="preferred" title="so romantic >///< i'm getting gay dizzies writing this">other half</li>
      <li class="preferred">partner</li>
      <li class="reserved">beloved</li>
      <li class="reserved">darling</li>
      <li class="reserved">wife</li>
      <li class="no">boo</li>
      <li class="no">boyfriend</li>
      <li class="no">hubby</li>
      <li class="no">husband</li>
    </ul>
  </div>
  <div>
    <h3>pronouns</h3>
    <ul>
      <li class="preferred">she/her</li>
      <li class="ok">they/them</li>
      <li class="ok">xe/xem</li>
      <li class="no">he/him</li>
      <li class="no">it/its</li>
    </ul>
    <h3>compliments</h3>
    <ul>
      <li class="preferred">adorable</li>
      <li class="preferred">cute</li>
      <li class="preferred">pretty</li>
      <li class="ok">beautiful</li>
      <li class="no">handsome</li>
      <li class="no">hot</li>
      <li class="no">sexy</li>
    </ul>
    <h3>person descriptions</h3>
    <ul>
      <li class="preferred" title="&quot;bean&quot; is an endearing term for a non-binary individual :3">bean</li>
      <li class="preferred">person</li>
      <li class="ok">bro</li>
      <li class="ok">dude</li>
      <li class="ok">enby</li>
      <li class="ok">girl</li>
      <li class="no">boy</li>
      <li class="no" title="i actually get mad if people call me this">buddy</li>
      <li class="no">man</li>
      <li class="no">sib</li>
      <li class="no">sis</li>
      <li class="no">woman</li>
    </ul>
  </div>
</pages>
