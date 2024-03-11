"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CouncilsList(props: any) {
  const searchParams = useSearchParams();

  const search = searchParams.get("s");
  useEffect(() => {
    if (search === "0" && props.offlineRef && props.offlineRef.current) {
      props.offlineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (search === "1" && props.onlineRef && props.onlineRef.current) {
      console.log("sdkjf");
      props.onlineRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className={`w-full ${poppins.className} bg-black bg-opacity-70`}>
      <div className="flex flex-col w-full px-3 md:w-2/3 md:p-0 mx-auto divide-y-2 divide-white gap-10 md:gap-16 ">
        <h2
          className=" text-4xl md:text-5xl text-center font-bold pt-10"
          ref={props.offlineRef}
        >
          Offline Delegate
        </h2>
        {/* ====== UNICEF ======= */}
        <div className="pt-10 md:pt-16 ">
          <h1 className="text-3xl font-bold text-center md:text-start">
            United Nations Children's Fund (
            <span className="text-[#DF6A26]">UNICEF</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-start py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Beginner -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/UNICEF.png"
              alt="UNICEF Icon"
              height={200}
              width={200}
              className="md:float-right mx-auto my-5 md:m-5 py-10"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-justify">
            The United Nations Children's Fund—abbreviated to UNICEF—is an
            international organization that focuses on assisting children
            worldwide through humanitarian and developmental aid. First
            established in 1946, the organization acted as a relief for children
            who have been severely impacted by the second World War. By 1950,
            the organization's direction was shifted into creating and
            implementing programs that would generally help increase children's
            welfare, hence extending UNICEF's mandate indefinitely. Since then,
            UNICEF has collaborated with over 190 countries, prioritizing its
            work in less-developed regions and is known to actively participate
            in assisting children in various emergency situations.
            <br />
            <br />
            UNICEF's programs have been guided by the Convention of the Rights
            of the Child (1986), which explores means of child development and
            their indivisible rights. Additionally, they are mandated in
            assisting the attainment of the 2015 Sustainable Development Goals
            (SDGs) worldwide - being, to ensure a form of sustainable
            development that is “child-centered”. Amongst its many child welfare
            frameworks includes the Child Friendly City Initiative (CFCI), which
            calls for the inclusion of children in public-private discussions to
            create living spaces that support child development. May it be child
            health, education, or other forms of rights, UNICEF remains
            consistent in improving forms of development for children worldwide.
          </p>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            Prioritizing the Forthcoming Generation: Protecting Child Rights
            through Child Friendly Cities
          </h2>
          <p className="text-justify">
            Communities should be livable for all - where everyone is guaranteed
            safety, comfort, and freedom of self-development. Hence, a
            child-friendly city is formed when a city is able to accommodate
            children and promotes their rights to the fullest extent in ensuring
            their livelihood. This can be seen through the design of the city's
            infrastructure, the inclusion of children in any and all
            governmental decisions, as well as the provision of basic
            necessities and facilities. However, due to the multitude of city
            development priorities—such as accommodating affluent newcomers,
            increasing attractiveness for investors, and others— ensuring child
            friendliness has been put on the last of their concerns. May it be
            school shootings, child marriages, or child labour, cases of
            atrocities towards child welfare have become increasingly common,
            with government and private actors turning a blind eye towards these
            crimes. These acts are a form of violation against the UN Convention
            on the Rights of the Child. However, amidst differences of financial
            capacities between Member States, could existing definitions of
            child-friendly cities be achieved in all countries? From this
            situation, delegates are expected to be able to collaborate to put
            forth a solution that can align the needs for a child-friendly city,
            all the while exploring new and improved ways in safeguarding and
            creating a comfortable childhood for all children.
          </p>
        </div>
        {/* ====== UNICEF ====== */}
        {/* ====== UNWTO ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-end">
            United Nations World Tourism Organization (
            <span className="text-[#DF6A26]">UNWTO</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-end py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Beginner -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/UNWTO.png"
              alt="UNWTO Icon"
              height={180}
              width={180}
              className="md:float-left mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-justify">
            The UN World Tourism Organization (UNWTO) has a leadership vision
            regarding the tourism challenges facing the world. UNWTO identifies
            the ability of the tourism sector to be better and positive,
            including the tourism sector that focuses on the progress of the 17
            Sustainable Development Goals (SDGs). Beyond the SDGs, the UNWTO is
            spirited in actuating their 2018 Management Vision, which comprises
            of five pillars: <strong>(1)</strong> actuating innovation-based
            tourism; <strong>(2)</strong> increasing the competitiveness of the
            tourism sector at every level and scale by expanding the number of
            investments and entrepreneurial actors; <strong>(3)</strong>{" "}
            creating jobs and provide relevant training to increase absorption
            of productive age workers; <strong>(4)</strong> creating resilient,
            safe, and smooth tourism travel; and <strong>(5)</strong> maximize
            the unique potential of the tourism sector in protecting cultural
            and natural heritage, all the while giving socioeconomic support to
            surrounding communities. The Organization is a major player in
            safeguarding the resilience of cultural tourism worldwide - as seen
            through the Istanbul Declaration, highlighting the need for
            collaboration between cultural tourism and local community
            stakeholders. All in all, the UNWTO assists in treading the delicate
            balance between the voices of local communities and international
            tourism demands.
          </p>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            Balancing Profit and Protection: Revisiting Principles of
            Sustainable Cultural Tourism
          </h2>
          <p className="text-justify">
            “Wonderful Indonesia”, “Explore France”, and “Incredible India”.
            These are only several amongst a multitude of tourism slogans
            promoting a nation's diversity of cultures and destinations. These
            slogans acknowledge the role of culture in inciting curiosity and
            value-sharing between communities. Contemporarily, however, the role
            of culture in a society has undergone a crucial shift. If culture
            initially serves as a source of identity, its role has expanded to
            forward a nation's development at large. We see this with how
            culture-driven tourism is titled as the most on-demand tourism
            sector of the decade. Beyond concerns of this shift, the
            mainstreaming of culture begs a more pressing question: is this
            sector of tourism <em>sustainable</em>? May it be revenue
            volatility, enterprise-driven exploitation, or social changes due to
            the influx of tourists, cultural tourism has been criticized for
            being unsustainable. Most concerningly, management of cultural
            tourism has arguably forgotten one of its core purposes, being to
            safeguard and promote the appreciation of local cultures. Hence,
            Member States are urged to not only bridge the dissenting views
            surrounding sustainable cultural tourism, but to also consider the
            views of native communities.
          </p>
        </div>
        {/* ====== UNWTO ====== */}
        {/* ====== UEFA ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-start">
            Union of European Football Association (
            <span className="text-[#DF6A26]">UEFA</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-start py-3">
            <span className="text-[#DF6A26]">Council Type</span>:{" "}
            <span className="text-[#F8D488]">Intermediate</span> - Single
            Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/UEFA.png"
              alt="UEFA Icon"
              height={180}
              width={180}
              quality={100}
              className="md:float-right mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-justify">
            The Union of European Football Association (UEFA) is the governing
            body of European football,serving as the umbrella organization for
            55 national football associations across Europe. As a representative
            democracy, the Association's objectives are to deal with matters
            relating to European football, to promote football in a spirit of
            unity, solidarity, peace,and fair play - all{" "}
            <strong>
              without any discrimination on politics, race, religion, gender or
              any other reason
            </strong>
            . Additionally, UEFA's goal is to promote and protect ethical
            standards and good governance in European football, all the while
            maintaining relations with all stakeholders involved in European
            football. In what is called the UEFA Congress, the UEFA president
            and general secretaries from 55 member nations gather to discuss
            decisions, measures, and proposals on enhancing the European game.
            The output from these Congress meetings vary - being joint
            statements, annual reports, or Draft Communiques, all in which rely
            on the unanimous agreement of its associate members. Come and join
            us and be the ultimate referee in maintaining open and equal
            participation, for EVERY player to be number 1!
          </p>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            The Financial Disparities in European Football: Bridging the Gap in
            Sports
          </h2>
          <p className="text-justify">
            European football is currently in crisis as inequalities continue to
            grow when every year big clubs spend billions of dollars to buy new
            players while leaving the other clubs with nothing. This
            overspending problem leads to the unequal opportunities for small
            clubs to compete in the league with bigger clubs. It has been proven
            by the fact that in the past decade, the champions in Europe‘s top 5
            leagues are only clubs that spend the most in the transfer windows,
            and the clubs that can not spend as much are most likely to get
            relegated. Back in 2009, UEFA introduced the Financial Fair Play
            (FFP) rule to curb overspending from every club in Europe. However,
            so far it has proven to be a failure and it does not stop big clubs
            from spending even more than they earn every year. Due to that, to
            prevent some big teams from “killing” the excitement of football as
            well as to create a more equal chance for every club to compete,
            delegates are expected to discuss and come up with solutions to
            limit the spending of every European football club and to create
            healthier and more financially stable regulations.
          </p>
        </div>
        {/* ====== UEFA ====== */}
        {/* ====== WWF ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-end">
            World Water Forum (<span className="text-[#DF6A26]">WWF</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-end py-3">
            <span className="text-[#DF6A26]">Council Type</span>:{" "}
            <span className="text-[#F8D488]">Intermediate</span> - Single
            Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/WWF.png"
              alt="WWF Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-left mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-justify">
            First held in 1997, the World Water Forum is a byproduct of the
            World Water Council and is renowned as the largest water-related
            meeting worldwide. The Forum assembles on a triannual basis, in
            which each of its meetings is centered on a Thematic Framework
            curated to improve water access and supply. The output of this Forum
            is to produce a global framework, proposed to raise awareness among
            decision-makers and the public, providing opportunities to develop
            new partnerships with shared visions on challenging water issues,
            and encouraging greater media attention for water issues along with
            their solutions. To achieve its aim successfully, the World Water
            Forum includes three phases, which are a three-year preparatory
            phase, a one-week event phase, and a synthesis phase at the end of
            the event. This year, Indonesia will host the tenth World Water
            Forum and the biggest one by far in terms of expected participants,
            which will bring participants from all areas and levels who will
            contribute to solving a wide range of water-related topics.
          </p>
          <h2 className="text-2xl font-bold text-center py-7 italic">
            <span className="text-[#DF6A26]">
              Blueprint for Blue Waters: Responsibility Sharing Amidst
              Industrial Water Contamination
            </span>
          </h2>
          <p className="text-justify">
            With doubled demands for clean water since 1960, ensuring reliable
            and quality water supply has become increasingly challenging,
            especially noting the impact of climate change towards water
            scarcity. In spite of government efforts to establish best practices
            for water management, trends of industry-led water contamination
            have virtually undermined these efforts. A lack of corporate social
            responsibility—may it be in technicalities or overall
            willingness—has resulted in the mismanagement of waste products,
            increased chemical pollution, and overall inability to predict water
            risks. With the umbrella theme of{" "}
            <em>Water for Shared Prosperity</em>, the 2024 World Water Forum
            seeks to devise a blueprint for sound and mutually-beneficial water
            governance that includes state and non-state actors alike - as seen
            through the Forum's subsidiary agenda of “Governance, Cooperation,
            and Hydro-diplomacy”. Hence, in heeding the seemingly unavoidable
            water emergency, delegates are urged to reorient water policymaking
            in a manner that puts sustainability and people's well-being at the
            forefront.
          </p>
        </div>
        {/* ====== WWF ====== */}
        {/* ====== HCC ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-start">
            Historical Crisis Council (
            <span className="text-[#DF6A26]">HCC</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-start py-3">
            <span className="text-[#DF6A26]">Council Type</span>:{" "}
            <span className="text-[#B73225]">Advanced</span> - Single Delegate
            <br />
            <span className="text-[#DF6A26]">Chamber name</span>: Dewan Nasional
          </h2>
          <div className="">
            <Image
              src="/council-icon/HCC.png"
              alt="HCC Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-right mx-auto my-5 md:m-5 p-2"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              <span className="text-lg font-semibold underline underline-offset-4">
                Introduction to Historical Crisis Committee
              </span>
              <br />
              The Crisis Council is an alternative council type that is designed
              around emulating realistic, high-stake conditions that otherwise
              cannot be imitated in conventional UN councils. Following a
              Historical Crisis Council (HCC) setting, delegates are given the
              powers to change the trajectory of Indonesian history through
              their unique roles - all with individual sets of goals. Delegates
              are expected to navigate through various scenarios, all the while
              maneuvering each scenario unraveling in real time as the Council's
              story arc progresses.
            </p>
          </div>
          <p className="text-justify pt-3">
            <span className="text-lg font-semibold underline underline-offset-4">
              Dewan Nasional Description
            </span>
            <br />
            Enacted in 1957, the Dewan Nasional is a national board which stands
            as the first program established by the Djuanda Cabinet, and was
            formed as an advisory board. The board is tasked with assisting the
            cabinet by providing advice and suggestions (whether requested by
            the cabinet or not), as well as bridging the gap between the
            government and its citizens. The board was led by Soekarno, and
            consisted of various regional representatives, who acted the voices
            of the people, and were expected to deliver the aspirations and
            concerns of the citizens of their respective regions. While the
            Dewan Nasional did not hold any direct power within the central
            government, they were highly influential in the decision-making
            process of the government, and had a hand in many of its important
            decrees. Ultimately, the board served as a conduit, channeling the
            hopes of the people to achieve the national dream of a unified
            Indonesia.
          </p>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            The 1957 National Forum: Drafting a New Unity Beyond the Centralized
            Order
          </h2>
          <p className="text-justify">
            It has been 12 years since the Proclamation of Independence, but the
            fight for unification has become harder than ever. Diplomatic
            attempts to consolidate and mediate governance in Irian Barat have
            failed, and elsewhere, tensions continue to rise as the threat of
            separatist factions—namely the forces of Dewan Perjuangan and
            Permesta—become ever more prominent. In spite of its independence,
            Indonesian politics remain muddled by the constant obstructions of
            military defectors and foreign powers alike, both loosening the
            stronghold of the central government. In an era flourishing with
            novel perceptions of Indonesian unity, the National Forum is created
            as a turning point for the Djuanda cabinet in restoring political
            certainty. Tasked with navigating the problems brought upon by
            economic and political turmoil, a myriad of questions are heaved
            upon this National Forum: what lies ahead for Indonesia's
            governance? Can the National Forum achieve integration amidst
            threats of disintegration? Or will the authority of the central
            government crumble under the pressure of separatist forces?
          </p>
        </div>
        {/* ====== HCC ====== */}
        {/* ====== UNSC ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-end">
            United Nations Security Council (
            <span className="text-[#DF6A26]">UNSC</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-end py-3">
            <span className="text-[#DF6A26]">Council Type</span>:{" "}
            <span className="text-[#B73225]">Advanced</span> - Double Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/UNSC.png"
              alt="UNSC Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-left mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              Would you like to explore how ASEAN fits into the security
              framework of the international community as of late? In this
              council we take a dive on the security interests of the countries
              within the Indo-Pacific, from the glaring issue of the South China
              Sea to the discourse arising when tackling arising security pacts.
              This council seeks to build alliances, set rules, and define what
              it means to feel secure in this global day and age. The United
              Nations Security Council (UNSC), is one of the six principal
              organs of the United Nations, and was established as soon as the
              United Nations was established. The UNSC is tasked with ensuring
              the peace and security of the international community. This
              council is also able to deploy peacekeepers, enact sanctions,
              authorize military actions, and revise the UN Charter when
              demanded. The United Nations is famous for its five permanent
              members: The USA, China, Russia, The UK, and France. These
              countries, known as the P5, have the power to veto any draft
              resolution that has been put forth by the council. Through the
              tools given by the United Nations Security Council, the committee
              urges the delegates to represent the stances and concerns of their
              respective countries, and find a solution (or solutions!) that
              will fit the interests of all parties involved.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            The Ocean Dilemmas: Redefining Security within the Indo-Pacific
            Ocean
          </h2>
          <p className="text-justify">
            The Indo-Pacific Ocean is an undeniable region of political
            interest. It is a frontier for a myriad of geopolitical disputes,
            and therefore, the peaceful coexistence of nations in the
            Indo-Pacific relies on the lack of “aggressive” expansion and
            balancing of power. Against this backdrop, the establishment of the
            2021 security pact consisting of Australia, United Kingdom, and
            United States—popularly abbreviated as AUKUS—has been a heated
            discussion for many. As a pact spirited in becoming a joint
            deterrence force and to uphold peace and stability, the pact not
            only challenges neighboring alliances, but also raises concerns as
            to how this pact would shift pre existing order within the region.
            Ultimately, AUKUS posits an important question: what is necessary
            for countries to feel safe? As criticized to be a new effort for
            political expansion—coupled with the usage of the region as a
            possible area for testing defensive technologies, some of which are
            nuclear powered—the existence of a foreign, opposing pacts in the
            Indo-Pacific region is a delicate subject for not only neighboring
            alliances, but also to non-involved nations due to its disruptive
            implications. Therefore, Member States are urged to discuss means of
            reforming the current security order in the Indo-Pacific region,
            whilst treading on clashing sovereignty claims.
          </p>
        </div>
        {/* ====== UNSC ====== */}
        {/* ====== PRESS CORPS ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-start">
            Press Corps
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-start py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Offline -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/PRESS.png"
              alt="Press Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-right mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              Also known as the “fourth estate” as part of the world's
              democracy, the Press Corps serves as the public's eyes and ears to
              acquire and report about current events, government actions, and
              societal trends. Press Corps is also made up of journalists,
              photographers, and other media professionals from a real life news
              agency. In Jakarta International Model UN 2024, the Press Corps
              journalists are to attend briefings, press conferences, and events
              to pose pointed questions, look for explanations, and deliver
              timely and correct information to the public. They serve as a link
              between the general public and people in positions of authority,
              encouraging openness and acting as a restraint on authority.
            </p>
          </div>
        </div>
        {/* ====== PRESS CORPS ====== */}
        <h2
          className="text-5xl text-center font-bold pt-16"
          ref={props.onlineRef}
        >
          Online Delegate
        </h2>
        {/* ====== ILO ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-end">
            International Labour Organization (
            <span className="text-[#DF6A26]">ILO</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-end py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Beginner -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/ILO.png"
              alt="ILO Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-left mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              The International Labour Organization was founded in 1919 under
              the League of Nations, making it one of the first and oldest
              specialized agencies of the United Nations. Its mandate is to
              promote economic and social justice through the creation of
              international labor standards. In more than a hundred years of its
              existence, the agency has developed 191 labor standards covering
              various aspects of labor rights to keep up with the ever changing
              challenges in the workplace, from technological development to
              globalization.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            Topic Title: Adjusting to the Emergence of Automation Into the
            Knowledge and Creative Industry
          </h2>
          <p className="text-justify">
            The organization's unique tripartite structure brings together the
            government, employer, and worker of its member states, unlike any
            other UN agencies. Those members then meet annually in an
            International Labour Conference to set the agency's policy and
            conventions. This structure assists ILO's efforts in actualizing the
            Decent Work Agenda, which sets a common objective for Member States
            to achieve full and productive employment, and decent work, by 2030.
            Come join our fight in realizing economic equality for all!
          </p>
        </div>
        {/* ====== ILO ====== */}
        {/* ====== UNHRC ====== */}
        <div className="pt-16">
          <h1 className="text-3xl font-bold text-center md:text-start">
            United Nations Human Rights Council (
            <span className="text-[#DF6A26]">UNHRC</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-start py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Beginner -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/UNHRC.png"
              alt="UNHRC Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-right mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              Replacing the United Nations Commission on Human Rights (UNCHR) in
              2006, the United Nations Human Rights Council (UNHRC) is a body
              under the United Nations that promotes and protects human rights
              globally. The council is mandated to address violations of rights
              that are outlined in the Universal Declaration of Human Rights
              (UDHR) and the UN Charter, and to thematically engage in all human
              rights issues. To act upon this mandate, the UNHRC is equipped
              with special procedures—also called the Special Rapporteurs—which
              are special teams that handle the investigation of certain issues
              related to human rights breaches in specific territories;
              currently, the special rapporteurs work under 45 human rights
              themes. Aside from that, every four years, the UNHRC also conducts
              the Universal Periodic Review, which is an assessment of member
              states' human rights implementation. All in all, the UNHRC assumes
              the role of the world's primary human rights body.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-center py-7 italic text-[#DF6A26]">
            A Beneficial Bias?: Identity-Based Discrimination in Criminal
            Justice Systems
          </h2>
          <p className="text-justify">
            Bigotry comes in many names, and trickles into many dimensions.
            Hence, Article 7 of the Universal Declaration of Human Rights (UDHR)
            highlights the importance of protecting social minorities—made up of
            gender, race, political leanings, sexuality, or other identity
            markers—from discrimination done by civilians and people in power.
            However, governments and law enforcers have been criticized for
            exhibiting biases in the forms of violent acts, identity-based
            profiling, unjust court proceedings, and others. Arguably, this is
            one of the signs that the law and its enforcement have been misused
            to further negative biases against these communities. Concerningly,
            many of these treatments are being justified as security measures.
            The War on Terror, <strong>#BlackLivesMatter</strong> movement, and
            the Mahsa Amini protests are several amongst many examples of
            “public emergencies” that justify rising frequencies of arrests made
            to “upkeep national peace”. Most of the people arrested during these
            “public instabilities” include Muslims, black people, as well as
            women respectively - all of which are social minorities. In light of
            these recent trends, Member States are urged to question: is the law
            compromisable in the face of possible public security threats? Or,
            are these acts deplorable under any circumstances and undermine the
            criminal justice's spirit of fairness?
          </p>
        </div>
        {/* ====== UNHRC ====== */}
        {/* ====== NATO ====== */}
        <div className="pt-16 mb-32">
          <h1 className="text-3xl font-bold text-center md:text-end">
            North Atlantic Treaty Organization (
            <span className="text-[#DF6A26]">NATO</span>)
          </h1>
          <h2 className="text-2xl font-medium text-center md:text-end py-3">
            <span className="text-[#DF6A26]">Council Type</span>: Beginner -
            Single Delegate
          </h2>
          <div className="">
            <Image
              src="/council-icon/NATO.png"
              alt="NATO Icon"
              height={200}
              width={200}
              quality={100}
              className="md:float-left mx-auto my-5 md:m-5"
              style={{ objectFit: "contain" }}
            />
            <p className="text-justify">
              Established in 1949, the North Atlantic Treaty Organization (NATO)
              is an outstanding international alliance committed to establishing
              the collective defense and security of its Member States. The
              Organization's spirit is aptly reflected in Article 5 of its
              treaty, where an act against one member is an attack against all.
              The inner workings of NATO is embodied through its motto,{" "}
              <em>Animus in consulendo liber</em> - meaning “in discussion, a
              free mind”, highlighting the importance of consultation amongst
              allies. NATO's primary objective is to safeguard the freedom and
              security of its members through political and military cooperation
              operating under the principle of consensus. The Council of NATO,
              known as the North Atlantic Council (NAC), serves as the
              organization's highest decision-making body, purposed to formulate
              strategic decisions, address emerging security challenges, and
              oversee the implementation of NATO's objectives. Through its
              meetings, the Organization facilitates open discussions on defense
              and security matters, fostering collaboration and coordination to
              respond effectively to evolving geopolitical threats.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-center py-7 italic">
            <span className="text-[#DF6A26]">
              An International Domain?: Security Expansion in the Arctic Ocean
            </span>
          </h2>
          <p className="text-justify">
            The Arctic region has long been targeted as an arena between
            competing powers. As a region storing the largest known
            concentration of rare metals, oil, and gas, interest for the Arctic
            region has skyrocketed again per the last decade. Owing to climate
            change and melting ice caps, self-vested environmental and economic
            goals have not only endangered the continuity of cooperation, but
            have also added facets to “threats to peace and stability” in the
            Arctic region. As NATO's Strategic Concept nears its second
            anniversary, whether or not the Strategy's commitment to “collective
            defense and interests” is upheld becomes ambiguous at best. Although
            the High North is considered as an international domain, national
            interests become further involved as more than 14 million km² of the
            Arctic region becomes new, tempting trade routes and novel deep sea
            mining centers. With such concerns in mind, recent expansion of
            military presence begs the question: what does NATO define as
            “threats to Arctic security”? Hence, Member States of NATO are not
            only urged to achieve consensus amidst clashing security priorities,
            but to also pay attention to the sustainability of ongoing Arctic
            activities for upcoming generations.
          </p>
        </div>
        {/* ====== NATO ====== */}
      </div>
    </div>
  );
}
