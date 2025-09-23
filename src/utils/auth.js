export function verificaUsuario(email, senha, usuario) {
  return email === usuario.email && senha === usuario.senha;
}
