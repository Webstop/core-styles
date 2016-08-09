module MoveBootstrapDocs
  class Generator < Jekyll::Generator
    def generate(site)
      node_path = '/node_modules/bootstrap-docs/docs'
      preferred_path = '/docs/bootstrap'

      site.pages.each do |page|
        if page.url.include? node_path
          puts "move from: #{page.url}"
          page.url.sub!(node_path, '')
          page.url.prepend(preferred_path)
          puts "move to:   #{page.url}"
          puts ''
        end
      end

    end
  end
end
