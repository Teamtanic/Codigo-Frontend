import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { TextInput } from "../../components/TextInput";
import { MagnifyingGlass } from "phosphor-react";
import { TableListDocument } from "./TableListDocument";
import { DocumentModal } from "./DocumentModal";
import { useEffect, useState } from "react";
import { getAllDocuments } from "../../services/Document/apiService";
import { DocumentResponse } from "../../services/Document/types";
import { TableListFolder } from "./TableListFolder";
import { useLocation } from "react-router-dom";
import { Loader } from "../../components/Loader";

export function ListDocument() {
  const [items, setItems] = useState<DocumentResponse[]>();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const folders = items?.filter((item) => item.nodeType === "cm:folder");
  const files = items?.filter((item) => item.nodeType === "cm:content");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getAllDocuments(
          decodeURIComponent(pathname.substring(12))
        );
        setItems(res.data);
      } catch (error) {
        console.error("Erro ao obter documentos:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [pathname]);

  return (
    <Container>
      <Navbar />
      <div className="w-full flex py-6 p-24 max-md:p-6 flex-col">
        <Heading size="lg">Documentos</Heading>

        {loading ? (
          <Loader />
        ) : (
          <div className="w-full mt-3">
            <Card className="w-full py-3 px-4">
              <TextInput.Root labelStyle="text-gray-900">
                <TextInput.Icon>
                  <MagnifyingGlass />
                </TextInput.Icon>
                <TextInput.Input
                  id="nome"
                  type="text"
                  placeholder="Pesquisar..."
                />
              </TextInput.Root>
            </Card>

            <div className="mt-10">
              {folders && Boolean(folders?.length) && (
                <div>
                  <Heading size="md">Pastas</Heading>
                  <TableListFolder data={folders} />
                </div>
              )}

              {files && Boolean(files?.length) && (
                <div>
                  <Heading size="md">Arquivos</Heading>
                  <TableListDocument data={files} />
                </div>
              )}

              <DocumentModal title="Cadastro Documento" action="Adicionar" />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
