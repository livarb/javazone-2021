import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import { InlineLink } from '../../components/InlineLink/InlineLink';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import {Figure} from "../../components/Figure/Figure";

export function InfoPage() {
    return (
        <>
            <VikingBanner header="Another year, another JavaZone!" subHeader="December 8-9th"/>
            <Section color="pink" header={<h1>JavaZone 101 the who, what and where</h1>}>
                <p>
                    JavaZone – the biggest European community-driven conference for modern developers will be 20 years old in 2021! Don’t miss out on two days of inspiring tech talks, a day of hands-on sessions, mingling, and a great party!
                </p>
                <p>
                    JavaZone is organized by <InlineLink color="pink" external url="https://javabin.no">javaBin</InlineLink>, the Norwegian Java User Group. Our goal is to organize a community-driven conference for Java developers where they can learn new things, share knowledge, and socialize.
                </p>
                <p>
                    We have been organizing JavaZone since 2001 and have been excited to watch the event grow bigger and better every year. In 2019 we hosted over 3200 participants and 160 speakers across 7 parallel tracks over the course of two days. In addition, we also offered a selection of 11 workshops held on the day before the conference started.
                </p>
                <p>
                    In 2020 due to COVID-19 we had our first free virtual conference, with 4 parallal tracks. This year we are back to a physical conference at Oslo spektrum december 8-9th.
                </p>
                <p>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years. Don’t procrastinate! Join your fellow Java developers at JavaZone in December!
                </p>
                <div><InlineLink color="pink" url='/corona'>More information about JavaZone & COVID-19</InlineLink></div>
            </Section>
            <Section color="pink" header={<h1>First thing first: Your ticket!</h1>}>
                <p>
                    To attend JavaZone you will need a ticket. The ticket grants you access to the full JavaZone experience, including workshops. The number of tickets is limited and distributed on a first-come-first-served basis, so it pays to be quick.
                </p>
            </Section>
            <Figure name="duke"/>
            <Section color="pink" header={<h1>Two conference days</h1>}>
                <p>
                    Two days full of talks from renowned speakers, in varying formats and categories. You don´t want to miss our amazing lineup.
                </p>
            </Section>
            <Section color="pink" header={<h1>An after party to remember</h1>}>
                <p>
                    After a long day of unique learning experiences, it feels good to chill out with some good food and drink. JavaZone parties are legendary - and we can promise something amazing for our afterparty this year as well! Scroll down for more information about AweZone!
                </p>
            </Section>
            <Section color="pink" header={<h1>Hands-on workshops</h1>}>
                <p>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and boost your knowledge and skills. The workshops are included in your ticket, but we have a limited number of seats. More information, along with registration details will be made available in December.
                </p>
            </Section>
            <Section color="pink" header={<h1>... and a whole lotta love</h1>}>
                <p>
                    You will meet lots of interesting people at JavaZone! Grab your coffee (or tea) and mingle away! 
                </p>
            </Section>
            <ImageSection imageName="partners_3" />
            <Section color="pink" header={<h1>The JavaZone Program</h1>}>
                <p>
                    The program will be made available a month before the conference. Stay tuned!
                </p>
            </Section>
            <Section color="pink" header={<h1>Lightning talks</h1>}>
                <p>
                    Lightning talks are either 10 or 20 minutes long and often gives a quick introduction to a concept. This is a great way to get a sneak peek at something new.
                </p>
            </Section>
            <Section color="pink" header={<h1>Presentations</h1>}>
                <p>
                    Presentations at JavaZone have a length of 45 or 60 minutes and will give you a deeper understanding of a concept than lightning talks.
                </p>
            </Section>
            <Section color="pink" header={<h1>Workshops</h1>}>
                <p>
                    Full blown learning sessions. This is where you get down and dirty with code. This year we’ll be offering a wide variety of 2-hour and 4-hour workshops.
                </p>
            </Section>
            <ImageSection imageName="info_1" />
            <Section color="pink" header={<h1>AweZone: celebrating the community</h1>}>
                <p>
                    AweZone is JavaZone's traditional party which takes place on Wednesday evening.
                </p>
                <p>
                    The party offers a great chance to catch up with old friends, meet new ones, and also experience a great line-up of entertainment! More information about the party will be given a month before the conference.
                </p>
            </Section>
            <Section color="pink" header={<h1>A few very important principles</h1>}>
                <p>
                    JavaZone is a 100% community-organized conference created by <InlineLink color="pink" external url="https://javabin.no">javaBin</InlineLink>. The program is chosen by our independent program committee, and they operate under the principle that no-one is paid to hold a presentation, and likewise, that no-one can pay us to get their presentation accepted.
                </p>
                <p>
                    We as organizers strive to create the best possible learning experience for all our speakers and participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that you treat your fellow conference participants with respect. We reserve the right to take any action necessary to make sure this principle is upheld. For more details, see our <InlineLink color="pink" external url="https://java.no/principles.html">Code of Conduct</InlineLink> that applies to all events organized by javaBin.
                </p>
                <p>
                    <strong>Should any unwanted event occur, we‘re here to help:</strong>
                </p>
                <p>
                    <strong>Before the conference</strong><br />
                    You can contact us by email: <InlineLink color="pink" external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> (this goes to a small group of people, the core organizers of JavaZone), or <InlineLink color="pink" external noBlankTarget url="mailto:javabin@java.no">javabin@java.no</InlineLink> (this goes to the javaBin board).
                </p>
                <p>
                    <strong>During the conference</strong><br />
                    Ask at the info stand, and we‘ll be in touch. Contact information will also be available at the info stand.
                </p>
            </Section>
            <Section color="pink" header={<h1>Questions?</h1>}>
                <p>
                    Do not hesitate to contact us if you have any questions. Contact us at <InlineLink color="pink" external noBlankTarget url="mailto:javazone@java.no">javazone@java.no</InlineLink> and we’ll try our best to give you an answer.
                </p>
                <p>
                    We are looking forward to seeing you at JavaZone 2021!
                </p>
            </Section>
        </>
    )
}
