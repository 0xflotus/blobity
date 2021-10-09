import React, { useEffect } from 'react';
import useBlobity from '../../../lib/useBlobity';
import './styles.css';
import { Head } from '../components/Head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Section } from '../components/Section';
import { Title } from '../components/Title';
import { Headline, SubHeadline, Text } from '../components/Text';
import { Layout, Half } from '../components/Layout';
import { Button, Link } from '../components/Button';
import { Options } from '../components/Options';
import { Price } from '../components/Price';
import { BigText } from '../components/BigText';
import { Dots } from '../components/Dots';
import { Notice } from '../components/Notice';
import { Controls } from '../components/Controls';
import { Thanks } from '../components/Thanks';
import { Code, htmlExample, reactExample } from '../components/Code';

export const initiaBlobityOptions = {
    licenseKey: 'gmrchk',
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    //color: '#666666',
    color: '#666666',
    dotColor: '#ff33dd',
    invert: false,
    focusableElements:
        '[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]',
    font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 14,
    fontWeight: 400,
    opacity: 1,
    // zIndex: 10, mnhkjhk
    fontColor: '#ffffff',
    zIndex: 1,
    size: 40,
    radius: 4,
};

export default () => {
    const blobityInstance = useBlobity(initiaBlobityOptions);

    useEffect(() => {
        if (blobityInstance.current) {
            // @ts-ignore for debugging purposes or playing around
            window.blobity = blobityInstance.current;
        }
    }, [blobityInstance]);

    return (
        <div>
            <Head title={'Blobity | Level up your cursor game'} />
            <Notice />
            <Header />
            <Section hero>
                <Title>Blobity</Title>
                <Text>
                    The cursor is the heart of any interaction with the web.
                    <br /> Why not take it to the next level? 🚀
                </Text>
                <Button href="https://gmrchk.gumroad.com/l/blobity">
                    Get Blobity
                </Button>
                <Button href="https://github.com/gmrchk/blobity#readme" ghost>
                    Documentation
                </Button>
            </Section>
            <Section id="customize">
                <Layout>
                    <Half>
                        <Headline>Customizable for every use case</Headline>
                        <Text>
                            Yes, we're talking about the playful cursor blobbing
                            around.
                        </Text>
                        <Text>
                            Every website is different and so, Blobity has a
                            wide list of options to customize its look and
                            behaviour. You can find the full list of options in{' '}
                            <Link href="https://github.com/gmrchk/blobity#readme">
                                developer documentation
                            </Link>
                            , and adjust it to fit any design.
                        </Text>
                        <Button href="https://github.com/gmrchk/blobity#readme">
                            Developer documentation
                        </Button>
                    </Half>
                    <Half>
                        <Options blobityInstance={blobityInstance} />
                    </Half>
                </Layout>
            </Section>
            <Section id="control">
                <Layout reversed>
                    <Half>
                        <Headline>Full control</Headline>
                        <Text>
                            Like it wasn't enough, Blobity has an API to control
                            what it does programmatically. This way you can make
                            sure the connection between your application and
                            Blobity feels seamless.
                        </Text>
                    </Half>
                    <Half>
                        <Controls blobityInstance={blobityInstance} />
                    </Half>
                </Layout>
            </Section>
            <Section id="installation">
                <Headline>Ridiculously easy to integrate</Headline>
                <Layout>
                    <Half>
                        <Code language="html">{htmlExample}</Code>
                    </Half>
                    <Half>
                        <Code language="jsx">{reactExample}</Code>
                    </Half>
                </Layout>
            </Section>
            <Section id="optimization">
                <Layout reversed>
                    <Half>
                        <Headline>Optimized AF</Headline>
                        <Text>
                            Blobity is using all kinds of optimization
                            techniques under the hood, including making use of{' '}
                            <strong>HTML5 canvas</strong> for all it's
                            rendering, or scheduling frames through{' '}
                            <strong>requestAnimationFrame</strong> to keep the
                            smooth animations at all possible times.
                        </Text>
                        <Text>
                            The fact that it's a less than 7 Kb in a standalone
                            (read bigger) version is just a cherry on top.
                        </Text>
                    </Half>
                    <Half>
                        <Dots index={1}>
                            <BigText>
                                60 <strong>fps</strong>
                            </BigText>
                        </Dots>
                    </Half>
                </Layout>
            </Section>
            <Section id="pricing">
                <Layout>
                    <Half>
                        <Headline>Pricing</Headline>
                        <Text>
                            The pricing is simple - license is purchased per
                            project. One license can be used for one website /
                            application, regardless of the size, purpose, or the
                            team working on the project.
                        </Text>
                        <Text>
                            <Link href="https://github.com/sponsors/gmrchk">
                                GitHub sponsors of gmrchk
                            </Link>{' '}
                            can use this product without limits for as long as
                            the sponsorship is active.
                        </Text>
                        <Text>
                            For any special use case, please, contact{' '}
                            <Link href="mailto:support@gmrchk.com">
                                support@gmrchk.com
                            </Link>
                            .
                        </Text>
                        <Button href="https://gmrchk.gumroad.com/l/blobity">
                            Get Blobity
                        </Button>
                    </Half>
                    <Half>
                        <Price>$24</Price>
                    </Half>
                </Layout>
            </Section>
            <Section id="faq" thin>
                <Headline>FAQ</Headline>
                <SubHeadline>How long can I use Blobity?</SubHeadline>
                <Text>
                    Blobity license is unlimited time-wise. You can use Blobity
                    for the entire lifetime of your project. No time limitations
                    or ongoing costs.
                </Text>
                <SubHeadline>
                    Can I use it for developing commercial projects?
                </SubHeadline>
                <Text>
                    You are granted a license to use the SOFTWARE as part of one
                    application, so long as that application is owned and
                    operated by you, the LICENSEE, or is owned and operated by
                    clients of LICENSEE.
                </Text>
                <SubHeadline>
                    Can I use Blobity on multiple projects?
                </SubHeadline>
                <Text>
                    Anyone can purchase unlimited number of licenses, but one
                    license is always for one project and is not transferable.
                </Text>
                <SubHeadline>Can I get a refund?</SubHeadline>
                <Text>
                    Blobity is published publicly to npm registry, and to GitHub
                    including its source code, so there is plenty opportunity to
                    try anything there is to try before purchasing your license.
                    If you still feel unsatisfied after the purchase, it's
                    possible in the 14 days from your purchase{' '}
                    <Link href="mailto:support@gmrchk.com">
                        support@gmrchk.com
                    </Link>
                    .
                </Text>
                <SubHeadline>Do I get access to updates?</SubHeadline>
                <Text>
                    You will have access to all future updates and you can
                    update to newer versions any time. All development happens
                    in the public GitHub repository, and is being pushed to
                    public npm registry as well following the semver versioning.
                </Text>
                <SubHeadline>Do you offer ongoing support?</SubHeadline>
                <Text>
                    The better, the more stable, and the more features Blobity
                    has, the more customers it can attract, so it will surely
                    improve and get extended over time to some extent. Bugs are
                    fixed in a timely manner.
                </Text>
                <Text>
                    However, the software comes as is at the time of your
                    purchase, and no future developments are guaranteed. If you
                    want to make specific per-case requests or are looking for
                    personal support, let's talk through{' '}
                    <Link href="mailto:support@gmrchk.com">
                        support@gmrchk.com
                    </Link>
                    .
                </Text>
            </Section>
            <Section id="buy" center last>
                <Headline>Ready to get started?</Headline>
                <Button href="https://gmrchk.gumroad.com/l/blobity">
                    Get Blobity
                </Button>
            </Section>
            <Footer />
            <Thanks />
        </div>
    );
};
