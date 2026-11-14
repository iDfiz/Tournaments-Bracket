import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next"
import '../../index.css';
import '../../App.css';
import '../../components/css/documentation.css';

export default function DocumentationLicense() {
    const { i18n } = useTranslation();

  return (
    <>
        <h1>Tournaments-Bracket: {i18n.t('documentation.documentation-menu-license')}</h1>
        <p>
            MIT License<br/><br/>

            Copyright (c) 2025-2026 iDfiz<br/><br/>

            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:<br/><br/>

            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.<br/><br/>

            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.<br/><br/>

            ---<br/><br/>

            If you find this project useful, you can support development via donations.
        </p>
    </>
  );
}
