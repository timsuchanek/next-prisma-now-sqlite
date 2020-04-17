import download from 'download'
import tempy from 'tempy'
import path from 'path'

export async function getSqlite() {
  const tempDir = tempy.directory()
  await download(
    'https://github.com/timsuchanek/next-child-process/raw/master/dev.db',
    tempDir,
  )
  return path.join(tempDir, 'dev.db')
}
