/* eslint-disable */

import React from "react";
import UnprotectedRoute from "../wrappers/UnprotectedRoute";
import MainWrapper from "../wrappers/MainWrapper";
import Dialog from "../ui/dialog/Dialog";
import DialogTitle from "../ui/dialog/DialogTitle";
import {Link} from "react-router-dom";

const PrivacyScreen = () => {
    return (
        <UnprotectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}>
                        <Dialog max={"w-max-3xl"}>
                            <DialogTitle>
                                Privacy Policy
                            </DialogTitle>
                            <p>
                                TuneSwap Privacy Policy. Last Updated: April 25, 2023
                            </p>
                            <br />
                            <p>
                                This Privacy Policy describes how TuneSwap (the "App", "we", "us", or "our") collects,
                                uses, stores, and shares your information when you use our service, TuneSwap. By using
                                the App, you agree to the collection and use of your information as described in this
                                Privacy Policy.
                            </p>
                            <br />
                            <p>
                                If you have any questions or concerns about this Privacy Policy, please contact us at
                                <Link to={"mailto:support@tuneswap.app"}></Link>.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>1. Information we collect</h3>
                            <br />
                            <p>
                                When you use TuneSwap, we collect the following types of information:
                            </p>
                            <br />
                            <h4 className={"text-xl"}>A. Personal Information</h4>
                            <ol style={{listStyle: "inside"}}>
                                <li>
                                    Email Address
                                </li>
                                <li>
                                    Password
                                </li>
                                <li>
                                    First Name
                                </li>
                            </ol>
                            <br />
                            <h4 className={"text-xl"}>B. Third-Party Account Information</h4>
                            <p>
                                When you connect your third-party music service accounts (Spotify, Tidal, Apple Music,
                                Pandora, Youtube Music, Amazon Music, or Deezer) to the App, we collect information
                                about your connected accounts, such as your playlists, song history, and song preferences.
                            </p>
                            <br />
                            <p>
                                We also store an identifier for your account so that we may access it while you use our
                                service. We perform all tasks on our servers, and we require access to your account while
                                those tasks are being performed.
                            </p>
                            <br />
                            <p>
                                We use this information to:
                                <ol style={{listStyle: "inside"}}>
                                    <li>
                                        Gather your playlists
                                    </li>
                                    <li>
                                        Gather songs that are inside of your playlists
                                    </li>
                                    <li>
                                        Create new playlists
                                    </li>
                                    <li>
                                        Add songs to playlists
                                    </li>
                                    <li>
                                        Monitor the status of your playlists (last modified date, newly added songs)
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <h4 className={"text-xl"}>C. Sign in with Apple</h4>
                            <p>
                                If you choose to authenticate with "Sign in with Apple", we collect the necessary
                                information to facilitate the authentication process. We receive and record your
                                email address and first name from Apple. No other Apple information is received or
                                recorded.
                            </p>
                            <br />
                            <h4 className={"text-xl"}>D. Usage Information</h4>
                            <p>
                                We collect information about how you use the App, including app usage, access times, and
                                device information.
                            </p>
                            <br />
                            <h4 className={"text-xl"}>E. Google AdMob and Google AdSense</h4>
                            <p>
                                We use Google AdMob and Google AdSense to serve ads within the App. Google AdMob and
                                Google AdSense may collect and use information about your device and other tracking
                                information to provide personalized ads to you.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>2. How We Use Your Information</h3>
                            <p>
                                We use the information we collect for the following purposes:
                                <ol style={{listStyle: "inside"}}>
                                    <li>To provide, maintain, and improve the App and its features</li>
                                    <li>To authenticate your identity and manage your account</li>
                                    <li>To personalize your experience within the App</li>
                                    <li>To respond to your inquiries, comments, and requests</li>
                                    <li>
                                        To communicate with you about important updates, promotions, or news related
                                        to the App
                                    </li>
                                    <li>
                                        To monitor and analyze usage and trends to improve the App's functionality and
                                        user experience
                                    </li>
                                    <li>
                                        To access and modify your music service accounts
                                    </li>
                                    <li>
                                        To deliver recommendations and features related to your music services
                                    </li>
                                    <li>
                                        To deliver targeted advertisements through Google AdMob and Google AdSense
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>3. Sharing Your Information</h3>
                            <p>
                                We may share your information in the following circumstances:
                                <ol style={{listStyle: "inside"}}>
                                    <li>
                                        With third-party music services, to enable the connection and sharing of
                                        playlists and song preferences between the App and the music services
                                    </li>
                                    <li>
                                        With third-party service providers, to help us manage and maintain the App
                                    </li>
                                    <li>
                                        When required by law, such as to comply with a legal obligation or in response
                                        to a valid legal request
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <p>
                                It is also possible for you to allow other users and the public to view certain details
                                about their accounts with the App under the following circumstances:
                                <ol style={{listStyle: "inside"}}>
                                    <li>
                                        If you share a "swap" with other users or the public
                                    </li>
                                    <li>
                                        If you share a "sync" with other users or the public
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <p>
                                Under these circumstances, other users or the public may be able to view these details
                                about your App account and music service accounts:
                                <ol style={{listStyle: "inside"}}>
                                    <li>First Name</li>
                                    <li>Playlist Name</li>
                                    <li>Link to your playlist on the specified service(s)</li>
                                </ol>
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>4. Data Security</h3>
                            <p>
                                We take the security of your personal information seriously and use appropriate
                                technical and organizational measures to protect it. However, no method of transmission
                                or storage is completely secure, and we cannot guarantee the absolute security of your
                                information.
                            </p>
                            <br />
                            <p>
                                All user passwords are encrypted with industry-standard algorithms and all traffic to
                                and from the App and the user is encrypted using industry-standard HTTPS. Access to
                                servers is secured using industry-standard private/public key authentication.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>5. Third-Party Links and Services</h3>
                            <p>
                                The App may contain links to or integration with third-party services, websites, or
                                applications. We are not responsible for the privacy practices or the content of such
                                third parties. We encourage you to review the privacy policies of these third parties
                                before using their services or providing them with your personal information. The privacy
                                policies of the third-party services that we link to or integrate with the App are
                                listed below:
                                <br /><br />
                                <ol style={{listStyle: "inside"}}>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://policies.google.com/privacy"}>Google AdMob and Google AdSense</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://stripe.com/privacy"}>Stripe</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://www.spotify.com/us/legal/privacy-policy/"}>Spotify</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://tidal.com/privacy"}>Tidal</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://support.apple.com/en-us/HT204881"}>Apple Music</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"}>Amazon Music</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://policies.google.com/privacy"}>YouTube Music</Link>
                                    </li>
                                    <li className={"text-indigo-700"}>
                                        <Link to={"https://www.deezer.com/legal/personal-datas"}>Deezer</Link>
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>6. Deleting Your Personal Information</h3>
                            <p>
                                If you choose to, you may remove your personal information from the App. Please navigate
                                to the settings page within the App and select the "Delete Account" option. All data
                                stored will be immediately removed from the App. Backups of data may take 48 hours to
                                be removed from the App's servers.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <h3 className={"text-2xl font-bold"}>7. Changes to This Policy</h3>
                            <p>
                                We reserve the right to modify this Privacy Policy at any time. We will post any changes
                                on this page and, if the changes are significant, we will provide a more prominent notice
                                (such as an in-app notification). Your continued use of the App after any changes to the
                                Privacy Policy signifies your acceptance of the revised policy.
                            </p>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </UnprotectedRoute>
    );
};

export default PrivacyScreen;
