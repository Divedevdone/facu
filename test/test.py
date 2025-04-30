from src.main import root, funcaoteste, Estudante, update_estudante, delete_estudante, create_estudante
from unittest.mock import patch
import pytest
import pytest_asyncio
from src.main import status_estudante

@pytest.mark.asyncio
async def test_root():
    result = await root()
    assert result == {"message": "Hello World"}

@pytest.mark.asyncio
async def test_funcaoteste():
    with patch('random.randint', return_value=12345):
        result = await funcaoteste()
    assert result == {"teste": True, "num_aleatorio": 12345}

@pytest.mark.asyncio
async def test_create_estudante():
    estudante_teste = Estudante(name="Fulano", curso="Curso 1", ativo=False)
    result = await create_estudante(estudante_teste)
    assert result.name == estudante_teste.name
    assert result.curso == estudante_teste.curso
    assert result.ativo == estudante_teste.ativo

@pytest.mark.asyncio
async def test_update_estudante_negativo():
    estudante_teste = Estudante(name="Teste", curso="Negativo", ativo=False)
    result = await update_estudante(-5, estudante_teste)
    assert not result

@pytest.mark.asyncio
async def test_update_estudante_positivo():
    estudante_teste = Estudante(name="Atualizado", curso="Curso Atualizado", ativo=True)
    result = await update_estudante(10, estudante_teste)
    assert result

@pytest.mark.asyncio
async def test_status_estudante():
    estudante_ativo = Estudante(name="Ana", curso="Direito", ativo=True)
    estudante_inativo = Estudante(name="Bruno", curso="Engenharia", ativo=False)

    ativo_result = await status_estudante(estudante_ativo)
    inativo_result = await status_estudante(estudante_inativo)

    assert ativo_result == {"status": "Ativo", "nome": "Ana"}
    assert inativo_result == {"status": "Inativo", "nome": "Bruno"}


@pytest.mark.asyncio
async def test_delete_estudante_negativo():
    result = await delete_estudante(-5)
    assert not result

@pytest.mark.asyncio
async def test_delete_estudante_positivo():
    result = await delete_estudante(5)
    assert result
