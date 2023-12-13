import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Text } from "../../components/Text";
import { Location, useLocation, useParams } from "react-router-dom";
import { DocumentResponse } from "../../services/Document/types";
import { humanFileSize } from "../../services/utils/bytesFormatter";
import { humanInstant } from "../../services/utils/instantFormatter";
import { useEffect, useState } from "react";
import {
  getDocumentById,
  getDocumentContent,
} from "../../services/Document/apiService";
import { Loader } from "../../components/Loader";

export function DetailsDocument() {
  const { state }: Location<{ record: DocumentResponse } | undefined> =
    useLocation();

  const [pageLoading, setPageLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);

  const [document, setDocument] = useState<DocumentResponse | undefined>(
    state?.record
  );
  const [file, setFile] = useState<unknown>();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (!document) {
        try {
          setPageLoading(true);
          const { data: document } = await getDocumentById(id!);
          setDocument(document);
        } catch (error) {
          console.error("Erro ao obter documento:", error);
        } finally {
          setPageLoading(false);
        }
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        setContentLoading(true);
        const { data: content } = await getDocumentContent(id!);
        const fileUrl = URL.createObjectURL(content);

        setFile(fileUrl);
      } catch (error) {
        console.error("Erro ao obter conteúdo do documento:", error);
      } finally {
        setContentLoading(false);
      }
    })();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        {pageLoading ? (
          <Loader />
        ) : !document ? (
          <Heading size="lg">Documento não encontrado</Heading>
        ) : (
          <>
            <Heading size="lg">Detalhes Documento</Heading>
            <Card className="w-full !p-0 min-h-[144px]">
              <div className="flex h-36 max-sm:flex-col max-sm:h-fit">
                <div className="flex flex-col max-md:w-3/5 md:w-4/5 p-4 justify-evenly">
                  <div className="w-full flex items-center justify-between">
                    <Text className="!text-gray-900 font-semibold">
                      {document.name}
                    </Text>
                    <Card className={`w-fit flex items-center`}>
                      <Text className="!text-gray-900 font-semibold" size="xm">
                        {document.content.mimeTypeName}
                      </Text>
                    </Card>
                  </div>
                  <Text size="sm" className="!text-gray-500 font-semibold">
                    Tamanho: {humanFileSize(document.content.sizeInBytes)}
                  </Text>
                  <Text size="sm" className="!text-gray-500 font-semibold">
                    Data: {humanInstant(document.modifiedAt)}
                  </Text>
                </div>
                <div className="bg-gray-300 w-full flex flex-col justify-evenly p-4">
                  <Text className="!text-gray-900 font-semibold">
                    Tipo de documento:{" "}
                    {document.document?.documentType.name || "Outro"}
                  </Text>
                </div>
              </div>
            </Card>

            {contentLoading ? (
              <Loader />
            ) : (
              <div className="mt-10">
                <object
                  data={file as string}
                  type={document.content.mimeType}
                  width={"100%"}
                  height={"800px"}
                  className="object-contain"
                ></object>
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  );
}
