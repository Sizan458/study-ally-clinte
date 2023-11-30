import { Worker, Viewer } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfjs from 'pdfjs-dist';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
//3.11.174
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const pdrViewer = ({ pdfUrl }) => {
    const url="3.11.174"
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${url}}/build/pdf.worker.min.js`}>
        <div style={{ height: '750px' }}>
            <Viewer
                fileUrl={pdfUrl}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </div>
    </Worker>
    
  );
};

export default pdrViewer;
