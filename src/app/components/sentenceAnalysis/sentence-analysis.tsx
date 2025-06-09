import { DetailAnalysis } from "./detail-analysis";
import { SentenceAnalysisProps } from "./type";

export function SentenceAnalysis({ sentence }: SentenceAnalysisProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0] mb-6">
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9f8] p-4 rounded-lg border-l-4 border-[#2a9d8f]">
            <h3 className="font-subtitle text-[#2a9d8f] mb-2">English</h3>
            <p className="font-text text-lg text-gray-800">{sentence.text}</p>
          </div>
          <div className="bg-[#fff8e6] p-4 rounded-lg border-l-4 border-[#e9c46a]">
            <h3 className="font-subtitle text-[#e9c46a] mb-2">Español</h3>
            <p className="font-text text-lg text-gray-800">{sentence.spanish}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-subtitle text-[#264653] mb-3">Alternativas</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-text text-gray-700">{sentence.alternative.english}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-text text-gray-700">{sentence.alternative.spanish}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#f8f9fa] p-4 rounded-lg">
          <h4 className="font-subtitle text-[#2a9d8f] mb-4 text-lg">Análisis en Inglés</h4>
          <DetailAnalysis analysis={sentence.analysis.english} language="english" />
        </div>

        <div className="bg-[#f8f9fa] p-4 rounded-lg">
          <h4 className="font-subtitle text-[#e9c46a] mb-4 text-lg">Análisis en Español</h4>
          <DetailAnalysis analysis={sentence.analysis.spanish} language="spanish" />
        </div>
      </div>
    </div>
  )
}
